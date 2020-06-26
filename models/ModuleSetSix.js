const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetSixSchema = new Schema({
  module1: { type: String, required: true },
  information1: { type: String, required: true },
  module2: { type: String, required: true },
  information2: { type: String, required: true },
  module3: { type: String, required: true },
  information3: { type: String, required: true },
  module4: { type: String, required: true },
  information4: { type: String, required: true },
  module5: { type: String, required: true },
  information5: { type: String, required: true },
  module6: { type: String, required: true },
  information6: { type: String, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetSix", moduleSetSixSchema);
