const algo_partOne = require("./algo_partOne");
const getInfoForModuleCode = require("./moduleInfo");

const algo_partTwo = async (extractedData, NEW_week_arr, week_arr) => {
  var tutSlot = null,
    lecSlot = null,
    secSlot = null,
    labSlot = null,
    recSlot = null,
    message,
    modSlots;

  if (extractedData.message) {
    message = extractedData.message;
    modSlots = { message };
  } else {
    if (extractedData.tutDetails) {
      var tutdata = await algo_partOne(
        extractedData.tutDetails,
        (await getInfoForModuleCode(extractedData.modCode)).tutInfo,
        NEW_week_arr,
        week_arr
      );
      week_arr = tutdata.week_arr;
      tutSlot = tutdata.classSlot.classNo;
    }

    if (extractedData.lecDetails) {
      var lecdata = await algo_partOne(
        extractedData.lecDetails,
        (await getInfoForModuleCode(extractedData.modCode)).lecInfo,
        NEW_week_arr,
        week_arr
      );
      week_arr = lecdata.week_arr;
      lecSlot = lecdata.classSlot.classNo;
    }

    if (extractedData.labDetails) {
      var labdata = await algo_partOne(
        extractedData.labDetails,
        (await getInfoForModuleCode(extractedData.modCode)).labInfo,
        NEW_week_arr,
        week_arr
      );
      week_arr = labdata.week_arr;
      labSlot = labdata.classSlot.classNo;
    }

    if (extractedData.secDetails) {
      var secdata = await algo_partOne(
        extractedData.secDetails,
        (await getInfoForModuleCode(extractedData.modCode)).secInfo,
        NEW_week_arr,
        week_arr
      );
      week_arr = secdata.week_arr;
      secSlot = secdata.classSlot.classNo;
    }

    if (extractedData.recDetails) {
      var recdata = await algo_partOne(
        extractedData.recDetails,
        (await getInfoForModuleCode(extractedData.modCode)).recInfo,
        NEW_week_arr,
        week_arr
      );
      week_arr = recdata.week_arr;
      recSlot = recdata.classSlot.classNo;
    }

    modSlots = { tutSlot, lecSlot, secSlot, labSlot, recSlot };
  }

  //   console.log(modSlots);
  return { modSlots, week_arr };
};

module.exports = algo_partTwo;
