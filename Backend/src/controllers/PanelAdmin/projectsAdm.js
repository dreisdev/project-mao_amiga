/* eslint-disable no-undef */
const ProjectModel = require("../../models/Projects");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer();
const aws = require("aws-sdk");

const endpoint = new aws.Endpoint(process.env.BLACK_ENDPOINT);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.BLACK_KEY_ID,
    secretAccessKey: process.env.BLACK_APP_KEY,
  },
});

const CreateProjects = async (req, res) => {
  upload.single("imagem")(req, res, async (err) => {
    if (err) {
      console.error("Erro ao processar Upload:", err);
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor ao processar o upload" });
      return;
    }

    const {
      titleProject,
      dayProject,
      monthProject,
      yearProject,
      localProject,
      descriptionProject,
      goalProject,
      collectedProject,
    } = req.body;

    const { file } = req;

    try {
      if (!file) {
        res
          .status(400)
          .json({ mensagem: "Imagem ausente no corpo da requisição." });
        return;
      }

      const params = {
        Bucket: process.env.BLACK_KEY_NAME,
        Key: `projetos/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      const s3UploadResponse = await s3.upload(params).promise();

      const createProject = {
        titleProject,
        dayProject,
        monthProject,
        yearProject,
        localProject,
        descriptionProject,
        goalProject,
        collectedProject,
        imagem: {
          url: s3UploadResponse.Location,
          contentType: file.mimetype,
          key: params.Key,
        },
      };

      if (!createProject) {
        res
          .status(400)
          .json({ mensagem: "Campos obrigatórios para criar Projetos." });
        return;
      }

      const response = await ProjectModel.create(createProject);

      res
        .status(201)
        .json({ response, mensagem: "Projeto criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  });
};

const GetAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();

    res.json(projects);
  } catch (error) {
    console.log(error);

    if (error.name === "MongooseTimeoutError") {
      res
        .status(500)
        .json({ mensagem: "Tempo limite excedido ao buscar eventos" });
      return;
    }

    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const GetProjectsId = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ mensagem: "Projeto não encontrado" });
      return;
    }

    const projects = await ProjectModel.findById(id);

    res.json(projects);
  } catch (error) {
    console.log(error);
  }
};

const DeleteProjects = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ mensagem: "Projeto não encontrado" });
      return;
    }

    const deleteProjects = await ProjectModel.findByIdAndDelete(id);

    console.log(deleteProjects);
    res
      .status(200)
      .json({ deleteProjects, mensagem: "Projeto excluído com sucesso" });
  } catch (error) {
    console.log(error);
  }
};

const UpdateProjects = async (req, res) => {
  upload.single("imagem")(req, res, async (err) => {
    if (err) {
      console.error("Erro ao processar Upload:", err);
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor ao processar o upload" });
      return;
    }

    const { id } = req.params;

    const {
      titleProject,
      dayProject,
      monthProject,
      yearProject,
      localProject,
      descriptionProject,
      goalProject,
      collectedProject,
    } = req.body;

    const { file } = req;

    try {
      if (!file) {
        res
          .status(400)
          .json({ mensagem: "Imagem ausente no corpo da requisição." });
        return;
      }

      const params = {
        Bucket: process.env.BLACK_KEY_NAME,
        Key: `projetos/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      const s3UploadResponse = await s3.upload(params).promise();

      const updateProject = {
        titleProject,
        dayProject,
        monthProject,
        yearProject,
        localProject,
        descriptionProject,
        goalProject,
        collectedProject,
        imagem: {
          url: s3UploadResponse.Location,
          contentType: file.mimetype,
          key: params.Key,
        },
      };

      if (!updateProject) {
        res
          .status(400)
          .json({ mensagem: "Campos obrigatórios para atualizar Projeto." });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ mensagem: "Projeto não encontrado" });
        return;
      } else {
        await ProjectModel.findByIdAndUpdate(id, updateProject);
      }

      return res
        .status(200)
        .json({ updateProject, mensagem: "Projeto atualizado com sucesso" });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = {
  CreateProjects,
  GetAllProjects,
  GetProjectsId,
  DeleteProjects,
  UpdateProjects,
};
