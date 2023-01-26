const mongoose = require("mongoose");
const { mongoURI: db } = require("../config/keys.js");
const User = require("../models/User");
const Event = require("../models/Event");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");



// Create users
const users = [];
const events = [];

users.push(
  new User({
    username: "cluu",
    email: "luuchristine15@gmail.com",
    hashedPassword: bcrypt.hashSync("password", 10),
    cycleLength: 35,
    periodLength: 5,
  })
);




events.push(
  new Event({
    userId: users[0],
    date: "2023-01-22",
    typeOfEvent: "Started Period",
    notes: "it is badddd",
  })
)



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    insertSeeds();
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
  console.log("Resetting db and seeding users and period...");
  User.collection
    .drop()
    .then(() => Event.collection?.drop())
    .then(() => User.insertMany(users))
    .then(() => Event.insertMany(events))
    .then(() => {
      console.log("done!");
      mongoose.disconnect();
    })
    .catch((err) => {
      console.error(err.stack);
      process.exit(1);
    });
};
