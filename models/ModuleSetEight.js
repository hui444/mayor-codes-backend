const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetEightSchema = new Schema({
  module1: { type: String, required: true },
  information1: { type: String },
  module2: { type: String, required: true },
  information2: { type: String },
  module3: { type: String, required: true },
  information3: { type: String },
  module4: { type: String, required: true },
  information4: { type: String },
  module5: { type: String, required: true },
  information5: { type: String },
  module6: { type: String, required: true },
  information6: { type: String },
  module7: { type: String, required: true },
  information7: { type: String },
  module8: { type: String, required: true },
  information8: { type: String },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetEight", moduleSetEightSchema);
