const moduleData = (information, classInfo) => {
  var modCode = information.modCode,
    tutDetails,
    lecDetails,
    secDetails,
    labDetails,
    recDetails;

  if (information.tutSlot) {
    if (information.tutSlot === "Choose") {
      tutDetails = "Choose";
    } else {
      tutDetails = classInfo.tutInfo.filter((tut) => {
        return tut.classNo === information.tutSlot;
      });
    }
  } else {
    tutDetails = null;
  }

  if (information.lecSlot) {
    if (information.lecSlot === "Choose") {
      lecDetails = "Choose";
    } else {
      lecDetails = classInfo.lecInfo.filter((lec) => {
        return lec.classNo === information.lecSlot;
      });
    }
  } else {
    lecDetails = null;
  }

  if (information.secSlot) {
    if (information.secSlot === "Choose") {
      secDetails = "Choose";
    } else {
      secDetails = classInfo.secInfo.filter((sec) => {
        return sec.classNo === information.secSlot;
      });
    }
  } else {
    secDetails = null;
  }

  if (information.labSlot) {
    if (information.labSlot === "Choose") {
      labDetails = "Choose";
    } else {
      labDetails = classInfo.labInfo.filter((lab) => {
        return lab.classNo === information.labSlot;
      });
    }
  } else {
    labDetails = null;
  }

  if (information.recSlot) {
    if (information.recSlot === "Choose") {
      recDetails = "Choose";
    } else {
      recDetails = classInfo.recInfo.filter((rec) => {
        return rec.classNo === information.recSlot;
      });
    }
  } else {
    recDetails = null;
  }

  return {
    modCode,
    tutDetails,
    lecDetails,
    secDetails,
    labDetails,
    recDetails,
  };
};

module.exports = moduleData;
