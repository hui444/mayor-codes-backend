const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetSixSchema = new Schema({
  module1: { type: String, required: true },
  information1: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  module2: { type: String, required: true },
  information2: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  module3: { type: String, required: true },
  information3: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  module4: { type: String, required: true },
  information4: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  module5: { type: String, required: true },
  information5: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  module6: { type: String, required: true },
  information6: {
    lessons: { type: Array, required: true },
    classes: { type: Array, required: true },
  },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetSix", moduleSetSixSchema);
