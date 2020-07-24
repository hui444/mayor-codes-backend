const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetSevenSchema = new Schema({
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
  module7: { type: String, required: true },
  information7: { type: Object, required: true },
  ranking: { type: Boolean, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetSeven", moduleSetSevenSchema);
