const { check } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validateEvent = [
  check("typeOfEvent")
    .isIn(["Start Period", "End Period"]),
  check("date")
    .isDate()
    .matches(/^20[0-9]{2}-[0-9]{2}-[0-9]{2}$/),
  handleValidationErrors,
];

module.exports = validateEvent;
