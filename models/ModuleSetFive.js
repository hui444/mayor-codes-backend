const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetFiveSchema = new Schema({
  module1: { type: String, required: true },
  information1: {
    classNo: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    weeks: { type: Array, required: true },
    venue: { type: String, required: true },
    day: { type: String, required: true },
    lessonType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  module2: { type: String, required: true },
  information2: {
    classNo: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    weeks: { type: Array, required: true },
    venue: { type: String, required: true },
    day: { type: String, required: true },
    lessonType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  module3: { type: String, required: true },
  information3: {
    classNo: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    weeks: { type: Array, required: true },
    venue: { type: String, required: true },
    day: { type: String, required: true },
    lessonType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  module4: { type: String, required: true },
  information4: {
    classNo: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    weeks: { type: Array, required: true },
    venue: { type: String, required: true },
    day: { type: String, required: true },
    lessonType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  module5: { type: String, required: true },
  information5: {
    classNo: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    weeks: { type: Array, required: true },
    venue: { type: String, required: true },
    day: { type: String, required: true },
    lessonType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetFive", moduleSetFiveSchema);
