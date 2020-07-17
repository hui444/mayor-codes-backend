const HttpError = require("../models/http-error");

const preferredSlot = (data) => {
  var tutSlot, lecSlot, secSlot, labSlot, recSlot;

  var modCode = data[0].split(" ")[0];

  var i = 1;
  while (data[i - 1]) {
    var ArrZero = data[i - 1].split(" ");
    if (ArrZero[i] === "Tutorial") {
      tutSlot = ArrZero[2];
    } else if (ArrZero[1] === "Lecture") {
      lecSlot = ArrZero[2];
    } else if (ArrZero[1] === "Sectional") {
      secSlot = ArrZero[2];
    } else if (ArrZero[1] === "Laboratory") {
      labSlot = ArrZero[2];
    } else if (ArrZero[1] === "Recitation") {
      recSlot = ArrZero[2];
    } else {
      console.log(ArrZero[1]);
      const error = new HttpError("Could not identify lesson type.", 404);
      throw error;
    }
    i++;
  }

  return { modCode, tutSlot, lecSlot, secSlot, labSlot, recSlot };
};

module.exports = preferredSlot;
