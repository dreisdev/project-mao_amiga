/* eslint-disable no-undef */
const express = require("express");

const rotas = require("./routes");

const PORT = process.env.PORT || 8000;

const app = express();

const cors = require("cors")

const allowedOrigins = [
    "http://localhost:5173",
    "https://maoamiga.azurewebsites.net",
    "https://77xgbpgs-5173.brs.devtunnels.ms",
]

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
app.use(rotas);

app.listen(PORT, () => {
    console.log(`Server on router ${PORT}`);
})