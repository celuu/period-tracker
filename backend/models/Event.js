const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: String,
      required: true,
    },
    typeOfEvent: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
