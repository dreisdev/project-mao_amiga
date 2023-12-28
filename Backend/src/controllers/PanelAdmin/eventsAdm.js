/* eslint-disable no-undef */
const EventModel = require("../../models/Event");
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

const CreateEvents = async (req, res) => {
  upload.single("imagem")(req, res, async (err) => {
    if (err) {
      console.error("Erro ao processar Upload:", err);
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor ao processar o upload" });
      return;
    }

    const {
      titleEvent,
      dayEvent,
      monthEvent,
      yearEvent,
      localEvent,
      contentEvent,
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
        Key: `eventos/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      const s3UploadResponse = await s3.upload(params).promise();

      const createEvent = {
        titleEvent,
        dayEvent,
        monthEvent,
        yearEvent,
        localEvent,
        contentEvent,
        imagem: {
          url: s3UploadResponse.Location,
          contentType: file.mimetype,
          key: params.Key,
        },
      };

      if (!createEvent) {
        res
          .status(400)
          .json({ mensagem: "Campos obrigatórios para criar Eventos." });
        return;
      }

      const response = await EventModel.create(createEvent);

      res
        .status(201)
        .json({ response, mensagem: "Evento criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  });
};

const GetAllEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    console.log(events);
    res.json(events);
  } catch (error) {
    console.log(error);
  }
};

const GetEventsId = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ mensagem: "Evento não encontrado" });
      return;
    }

    const events = await EventModel.findById(id);

    res.json(events);
  } catch (error) {
    console.log(error);
  }
};

const DeleteEvents = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ mensagem: "Evento não encontrado" });
      return;
    }

    const deleteEvents = await EventModel.findByIdAndDelete(id);

    console.log(deleteEvents);
    res
      .status(200)
      .json({ deleteEvents, mensagem: "Evento excluído com sucesso" });
  } catch (error) {
    console.log(error);
  }
};

const UpdateEvents = async (req, res) => {
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
      titleEvent,
      dayEvent,
      monthEvent,
      yearEvent,
      localEvent,
      contentEvent,
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
        Key: `eventos/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      const s3UploadResponse = await s3.upload(params).promise();

      const updateEvent = {
        titleEvent,
        dayEvent,
        monthEvent,
        yearEvent,
        localEvent,
        contentEvent,
        imagem: {
          url: s3UploadResponse.Location,
          contentType: file.mimetype,
          key: params.Key,
        },
      };

      if (!updateEvent) {
        res
          .status(400)
          .json({ mensagem: "Campos obrigatórios para criar Eventos." });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ mensagem: "Evento não encontrado" });
        return;
      } else {
        await EventModel.findByIdAndUpdate(id, updateEvent);
      }

      return res
        .status(200)
        .json({ updateEvent, mensagem: "Evento atualizado com sucesso" });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = {
  CreateEvents,
  GetAllEvents,
  GetEventsId,
  DeleteEvents,
  UpdateEvents,
};
