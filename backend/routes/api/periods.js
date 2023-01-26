const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User")
const Period = mongoose.model("PeriodDate");
const { requireUser } = require("../../config/passport");

// router.get("/", async (req, res) => {
//   try {
//     const periods = await Period.find()
//     return res.json(periods);
//   } catch (err) {
//     return res.json([]);
//   }
// });

router.get("/:userId", async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
  } catch (err) {
    const error = new Error("User not found");
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
  try {
    const periods = await Period.find({ userId: user._id })
    return res.json(periods);
  } catch (err) {
    return res.json([]);
  }
});



router.post("/", requireUser, async (req, res, next) => {
  try {
    const newPeriod = new Period({
      userId: req.user._id,
      startDate: req.body.startDate,
      cycleLength: req.body.cycleLength,
      periodLength: req.body.periodLength,
    });
    let period = await newPeriod.save();
    return res.json(period);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId", requireUser, async (req, res, next) => {
  try {
    let id = req.params.id;
    let period = await Period.findOneAndDelete({ _id: id }); 
  
    return res.json({
      message: ` Successfully Deleted period with id ${id} and updated Spot`,
    });
  } catch (err) {
    const error = new Error("Delete Period failed");
    error.statusCode = 404;
    error.errors = {
      message: "Failed to delete a period, wrong id or period does not exist",
    };
    return next(error);
  }
});


module.exports = router;
