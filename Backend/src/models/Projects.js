/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectShema = new Schema(
  {
    titleProject: {
      type: String,
      required: true,
    },
    dayProject: {
      type: String,
      required: true,
    },
    monthProject: {
      type: String,
      required: true,
    },
    yearProject: {
      type: String,
      required: true,
    },
    localProject: {
      type: String,
      required: true,
    },
    descriptionProject: {
      type: String,
      required: true,
    },
    imagem: {
      url: {
        type: String,
        required: true,
      },

      key: {
        type: String,
        required: true,
      },
    },
    goalProject: {
      type: Number,
      required: true,
    },
    collectedProject: {
      type: Number,
    },
  },

  { timestamps: true }
);

const Project = mongoose.model("Project", projectShema);

module.exports = Project;
