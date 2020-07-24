const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSetFiveSchema = new Schema({
  module1: { type: String, required: true },
  information1: { type: Object, required: true },
  // lessons: { type: Array, required: true }, //this contains the types of lessons the module requires
  // classes: { type: Array, required: true }, //this contains the specific class number the algo chooses for the student (corressponds to the lesson type above)
  // tutorialType: { type: Array, required: true }, //this contains all the tutorial type class information
  // tut: { type: Number, required: true }, //this contains the number of tutorials the module has
  // lectureType: { type: Array, required: true }, //this contains all the lecture type class information
  // lec: { type: Number, required: true }, //this contains the number of lectures the module has
  // sectionalType: { type: Array, required: true }, //this contains all the sectional type class information
  // sec: { type: Number, required: true }, //this contains the number of sectionals the module has
  // laboratoryType: { type: Array, required: true }, //this contains all the laboratory type class information
  // lab: { type: Number, required: true }, //this contains the number of laboratory the module has
  // recitationType: { type: Array, required: true }, //this contains all the recitation type class information
  // rec: { type: Number, required: true }, //this contains the number of recitation the module has
  module2: { type: String, required: true },
  information2: { type: Object, required: true },
  module3: { type: String, required: true },
  information3: { type: Object, required: true },
  module4: { type: String, required: true },
  information4: { type: Object, required: true },
  module5: { type: String, required: true },
  information5: { type: Object, required: true },
  ranking: { type: Boolean, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("ModuleSetFive", moduleSetFiveSchema);
