const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customModuleSetSix = new Schema({
  module1: { type: String, required: true },
  information1: { type: Object, required: true },
  module2: { type: String, required: true },
  information2: { type: Object, required: true },
  module3: { type: String, required: true },
  information3: { type: Object, required: true },
  module4: { type: String, required: true },
  information4: { type: Object, required: true },
  module5: { type: String, required: true },
  information5: { type: Object, required: true },
  module6: { type: String, required: true },
  information6: { type: Object, required: true },
  clashes: { type: Boolean, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("CustomModuleSetSix", customModuleSetSix);
