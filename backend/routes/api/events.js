const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User")
const Event = mongoose.model("Event");
const { requireUser } = require("../../config/passport");
const validateEvent = require("../../validations/event");

// router.get("/", async (req, res) => {
//   try {
//     const periods = await Period.find()
//     return res.json(periods);
//   } catch (err) {
//     return res.json([]);
//   }
// });

router.get("/", requireUser, async (req, res, next) => {
  try {
    const events = await Event.find({ userId: req.user._id })
    return res.json(events);
  } catch (err) {
    console.error(err)
    return res.json([]);
  }
});


router.post("/", requireUser, validateEvent, async (req, res, next) => {
  try {
    const newEvent = new Event({
      userId: req.user._id,
      date: req.body.date,
      typeOfEvent: req.body.typeOfEvent,
      notes: req.body.notes,
    });
    let event = await newEvent.save();
    return res.json(event);
  } catch (err) {
    console.error(err)
    next(err);
  }
});

router.delete("/:id", requireUser, async (req, res, next) => {
  try {
    let id = req.params.id;
    await Event.findOneAndDelete({ _id: id, userId: req.user._id }); 
  
    return res.json({
      message: ` Successfully Deleted event with id ${id} and updated event`,
    });
  } catch (err) {
    const error = new Error("Delete event failed");
    console.error(err)
    error.statusCode = 404;
    error.errors = {
      message: "Failed to delete a event, wrong id or event does not exist",
    };
    return next(error);
  }
});


module.exports = router;
