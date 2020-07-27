const algo_partSix = require("./algo_partSix");
const getInfoForModuleCode = require("./moduleInfo");

const algo_partTwo = async (modCode, extractedData, week_arr) => {
  var tutSlot = null,
    lecSlot = null,
    secSlot = null,
    labSlot = null,
    recSlot = null,
    message,
    modSlots,
    error = false;
  if (extractedData.message) {
    message = extractedData.message;
    modSlots = { modCode, message };
  } else {
    if (extractedData.tutDetails) {
      var modCodeInfo = await getInfoForModuleCode(extractedData.modCode);
      var tutdata = await algo_partSix(
        extractedData.tutDetails,
        modCodeInfo.tutInfo,
        modCodeInfo.tutorialType,
        modCodeInfo.tut,
        week_arr
      );
      week_arr = tutdata.week_arr;
      tutSlot = tutdata.classSlot.classNo;
      error = error || tutdata.error;
    }

    if (extractedData.lecDetails) {
      var modCodeInfo = await getInfoForModuleCode(extractedData.modCode);
      var lecdata = await algo_partSix(
        extractedData.lecDetails,
        modCodeInfo.lecInfo,
        modCodeInfo.lectureType,
        modCodeInfo.lec,
        week_arr
      );
      week_arr = lecdata.week_arr;
      lecSlot = lecdata.classSlot.classNo;
      error = error || lecdata.error;
    }

    if (extractedData.labDetails) {
      var modCodeInfo = await getInfoForModuleCode(extractedData.modCode);
      var labdata = await algo_partSix(
        extractedData.labDetails,
        modCodeInfo.labInfo,
        modCodeInfo.laboratoryType,
        modCodeInfo.lab,
        week_arr
      );
      week_arr = labdata.week_arr;
      labSlot = labdata.classSlot.classNo;
      error = error || labdata.error;
    }

    if (extractedData.secDetails) {
      var modCodeInfo = await getInfoForModuleCode(extractedData.modCode);
      var secdata = await algo_partSix(
        extractedData.secDetails,
        modCodeInfo.secInfo,
        modCodeInfo.sectionalType,
        modCodeInfo.sec,
        week_arr
      );
      week_arr = secdata.week_arr;
      secSlot = secdata.classSlot.classNo;
      error = error || secdata.error;
    }

    if (extractedData.recDetails) {
      var modCodeInfo = await getInfoForModuleCode(extractedData.modCode);
      var recdata = await algo_partSix(
        extractedData.recDetails,
        modCodeInfo.recInfo,
        modCodeInfo.recitationType,
        modCodeInfo.rec,
        week_arr
      );
      week_arr = recdata.week_arr;
      recSlot = recdata.classSlot.classNo;
      error = error || recdata.error;
    }

    modSlots = { modCode, tutSlot, lecSlot, secSlot, labSlot, recSlot };
  }

  console.log(modCode + error);
  return { modSlots, week_arr, error };
};

module.exports = algo_partTwo;
