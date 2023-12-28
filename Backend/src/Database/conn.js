/* eslint-disable no-undef */
require("dotenv").config();
const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://project_mao_amiga:${process.env.DATA_BASE_PASS}@datadreis.dnoi4fg.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
    throw error;
  }
};

module.exports = Connection;
