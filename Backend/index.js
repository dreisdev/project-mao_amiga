/* eslint-disable no-undef */
const express = require("express");

const rotas = require("./routes");

const PORT = process.env.PORT || 8000;

const app = express();

const cors = require("cors");

const allowedOrigins = [
  "https://maoamiga.azurewebsites.net",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const database = await require("./src/Database/conn");

database();

app.use(express.json());
app.use(rotas);

app.listen(PORT, () => {
  console.log(`Server on router ${PORT}`);
});
