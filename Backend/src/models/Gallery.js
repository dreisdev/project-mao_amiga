/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const galleryShema = new Schema(
  {
    titleEvent: {
      type: String,
      required: true,
    },
    contentEvent: {
      type: String,
      required: true,
    },
    imagens: [
      {
        url: {
          type: String,
          required: true,
        },

        key: {
          type: String,
          required: true,
        },
      },
    ],
  },

  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", galleryShema);

module.exports = Gallery;
