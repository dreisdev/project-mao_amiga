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

rotas.use(express.json());

rotas.get("/config", ConfigKey);

rotas.post("/payment/boleto", boletoPayment);
rotas.post("/payment/card", cardPayment);
rotas.post("/login", Login);
rotas.get("/events", GetAllEvents);
rotas.get("/events/:id", GetEventsId);
rotas.post("/events", CreateEvents);
rotas.delete("/events/:id", DeleteEvents);
rotas.put("/events/:id", UpdateEvents);

module.exports = rotas;
