/* eslint-disable no-undef */
const GalleryModel = require("../../models/Gallery");
const mongoose = require("mongoose");
const multer = require("multer");
const storage = multer.memoryStorage();
const uploads = multer({ storage: storage });
const aws = require("aws-sdk");

const endpoint = new aws.Endpoint(process.env.BLACK_ENDPOINT);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.BLACK_KEY_ID,
    secretAccessKey: process.env.BLACK_APP_KEY,
  },
});

const PhotosGallery = async (req, res) => {
  uploads.array("imagens", 5)(req, res, async (err) => {
    if (err) {
      console.error("Erro ao processar Upload:", err);
      res
        .status(500)
        .json({ mensagem: "Erro interno do servidor ao processar o upload" });
      return;
    }

    const { titleEvent, contentEvent } = req.body;

    const files = req.files;

    try {
      if (!files) {
        res
          .status(400)
          .json({ mensagem: "Imagem ausente no corpo da requisição." });
        return;
      }

      const uploadsPromisses = files.map(async (file) => {
        const params = {
          Bucket: process.env.BLACK_KEY_NAME,
          Key: `galeria/${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
        };

        const s3UploadResponse = await s3.upload(params).promise();

        return {
          url: s3UploadResponse.Location,
          contentType: file.mimetype,
          key: params.Key,
        };
      });

      const imagens = await Promise.all(uploadsPromisses);

      const newEventsPhotos = {
        titleEvent,
        contentEvent,
        imagens,
      };

      if (!newEventsPhotos) {
        res
          .status(400)
          .json({ mensagem: "Campos obrigatórios para criar Projetos." });
        return;
      }

      const response = await GalleryModel.create(newEventsPhotos);

      res.status(201).json({
        response,
        mensagem: "Fotos do Evento adicionadas com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const GetAllGallery = async (req, res) => {
  try {
    const eventsGallery = await GalleryModel.find();

    res.json(eventsGallery);
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

const DeleteEventGallery = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ mensagem: "Evento não encontrado" });
      return;
    }

    const deleteEventPhotos = await GalleryModel.findByIdAndDelete(id);

    res
      .status(200)
      .json({ deleteEventPhotos, mensagem: "Evento excluído com sucesso" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  PhotosGallery,
  GetAllGallery,
  DeleteEventGallery,
};
