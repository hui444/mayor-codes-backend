const HttpError = require("../models/http-error");

const preferredSlot = (data) => {
  var tutSlot, lecSlot, secSlot, labSlot, recSlot, message;

  console.log(data);

  var modCode = data[0];
  if (data.length === 1) {
    message = "No information available";
    return { modCode, message };
  } else {
    var i = 1;
    while (data[i]) {
      var ArrZero = data[i].split(" ");
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
  }
};

module.exports = preferredSlot;
