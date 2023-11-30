/* eslint-disable no-undef */
const express = require("express");
const rotas = express();

const { ConfigKey } = require("./controllers/Config/config");
const { boletoPayment, cardPayment } = require("./controllers/Stripe/paymentIntent");



rotas.use(express.json());


rotas.get("/config", ConfigKey);

rotas.post("/payment/boleto", boletoPayment);
rotas.post("/payment/card", cardPayment);


module.exports = rotas;