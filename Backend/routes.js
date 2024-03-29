/* eslint-disable no-undef */
const express = require("express");
const rotas = express();

const { ConfigKey } = require("./src/controllers/Config/config");
const {
  boletoPayment,
  cardPayment,
} = require("./src/controllers/Stripe/paymentIntent");
const { Login } = require("./src/controllers/PanelAdmin/login");
const {
  CreateEvents,
  GetAllEvents,
  GetEventsId,
  DeleteEvents,
  UpdateEvents,
} = require("./src/controllers/PanelAdmin/eventsAdm");

const {
  GetAllProjects,
  GetProjectsId,
  CreateProjects,
  DeleteProjects,
  UpdateProjects,
} = require("./src/controllers/PanelAdmin/projectsAdm");
const {
  emailUserNotice,
  emailContact,
} = require("./src/controllers/email/contactEmail");
const {
  PhotosGallery,
  GetAllGallery,
  DeleteEventGallery,
} = require("./src/controllers/PanelAdmin/GalleryAdm");

rotas.use(express.json());

rotas.get("/config", ConfigKey);

rotas.post("/payment/boleto", boletoPayment);
rotas.post("/payment/card", cardPayment);

rotas.post("/login", Login);

rotas.post("/emailUser", emailUserNotice);
rotas.post("/emailBox", emailContact);

rotas.get("/events", GetAllEvents);
rotas.get("/events/:id", GetEventsId);
rotas.post("/events", CreateEvents);
rotas.delete("/events/:id", DeleteEvents);
rotas.put("/events/:id", UpdateEvents);

rotas.get("/projects", GetAllProjects);
rotas.get("/projects/:id", GetProjectsId);
rotas.post("/projects", CreateProjects);
rotas.delete("/projects/:id", DeleteProjects);
rotas.put("/projects/:id", UpdateProjects);

rotas.post("/gallery", PhotosGallery);
rotas.get("/gallery", GetAllGallery);
rotas.delete("/gallery/:id", DeleteEventGallery);

module.exports = rotas;
