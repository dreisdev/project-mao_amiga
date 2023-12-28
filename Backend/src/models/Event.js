/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventShema = new Schema(
  {
    titleEvent: {
      type: String,
      required: true,
    },
    dayEvent: {
      type: String,
      required: true,
    },
    monthEvent: {
      type: String,
      required: true,
    },
    yearEvent: {
      type: String,
      required: true,
    },
    localEvent: {
      type: String,
      required: true,
    },
    contentEvent: {
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
  },

  { timestamps: true }
);

const Event = mongoose.model("Event", eventShema);

module.exports = Event;
