const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const periodSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    startDate: [{
      type: String,
      required: true,
    }],
    cycleLength: {
      type: Number,
      required: true,
    },
    periodLength: {
      type: Number, 
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PeriodDate", periodSchema);
