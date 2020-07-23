const getInfoForModuleCode = require("./moduleInfo");
const moduleData = require("./moduleData");

const extractInformation = async (data) => {
  //data includes module1-module5, each tutSlot, lecSlot, secSlot, labSlot, recSlot and message and number of modules

  var classInfo1,
    classInfo2,
    classInfo3,
    classInfo4,
    classInfo5,
    classInfo6,
    classInfo7,
    classInfo8;

  var extractedData1,
    extractedData2,
    extractedData3,
    extractedData4,
    extractedData5,
    extractedData6,
    extractedData7,
    extractedData8;

  //if message exits, there is no information available for that module
  /* getInfoForModuleCode returns lessons, classes, tutorialType, tutInfo, tut, lectureType, 
  lecInfo, lec, sectionalType, secInfo, sec, laboratoryType, labInfo, lab, recitationType, 
  recInfo, rec */
  if (!data.information1.message) {
    classInfo1 = await getInfoForModuleCode(data.module1);
    extractedData1 = moduleData(data.information1, classInfo1);
  } else {
    modCode = data.module1;
    message = data.information1.message;
    extractedData1 = { modCode, message };
  }
  if (!data.information2.message) {
    classInfo2 = await getInfoForModuleCode(data.module2);
    extractedData2 = moduleData(data.information2, classInfo2);
  } else {
    modCode = data.module2;
    message = data.information2.message;
    extractedData2 = { modCode, message };
  }
  if (!data.information3.message) {
    classInfo3 = await getInfoForModuleCode(data.module3);
    extractedData3 = moduleData(data.information3, classInfo3);
  } else {
    modCode = data.module3;
    message = data.information3.message;
    extractedData3 = { modCode, message };
  }
  if (!data.information4.message) {
    classInfo4 = await getInfoForModuleCode(data.module4);
    extractedData4 = moduleData(data.information4, classInfo4);
  } else {
    modCode = data.module4;
    message = data.information4.message;
    extractedData4 = { modCode, message };
  }
  if (!data.information5.message) {
    classInfo5 = await getInfoForModuleCode(data.module5);
    extractedData5 = moduleData(data.information5, classInfo5);
  } else {
    modCode = data.module5;
    message = data.information5.message;
    extractedData5 = { modCode, message };
  }
  if (data.number >= 6) {
    if (!data.information6.message) {
      classInfo6 = await getInfoForModuleCode(data.module6);
      extractedData6 = moduleData(data.information6, classInfo6);
    } else {
      modCode = data.module6;
      message = data.information6.message;
      extractedData6 = { modCode, message };
    }
  }
  if (data.number >= 7) {
    if (!data.information7.message) {
      classInfo7 = await getInfoForModuleCode(data.module7);
      extractedData7 = moduleData(data.information7, classInfo7);
    } else {
      modCode = data.module7;
      message = data.information7.message;
      extractedData7 = { modCode, message };
    }
  }
  if (data.number >= 8) {
    if (!data.information8.message) {
      extractedData8 = moduleData(data.information8, classInfo8);
      classInfo8 = await getInfoForModuleCode(data.module8);
    } else {
      modCode = data.module8;
      message = data.information8.message;
      extractedData8 = { modCode, message };
    }
  }

  /* extractedData contains tutDetails, lecDetails, secDetails, labDetails and recDetails
  1. information for selected slots
  2. "Choose" for non selected slots
  3. null for classtypes that do not exist */

  var extractedData = {
    extractedData1,
    extractedData2,
    extractedData3,
    extractedData4,
    extractedData5,
  };

  if (data.number >= 6) extractedData = { ...extractedData, extractedData6 };
  if (data.number >= 7) extractedData = { ...extractedData, extractedData7 };
  if (data.number >= 8) extractedData = { ...extractedData, extractedData8 };

  return extractedData;
};

module.exports = extractInformation;
