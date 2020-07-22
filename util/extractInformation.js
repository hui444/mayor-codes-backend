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

  //if message exits, there is no information available for that module
  /* getInfoForModuleCode returns lessons, classes, tutorialType, tutInfo, tut, lectureType, 
  lecInfo, lec, sectionalType, secInfo, sec, laboratoryType, labInfo, lab, recitationType, 
  recInfo, rec */
  if (!data.information1.message)
    classInfo1 = await getInfoForModuleCode(data.module1);
  if (!data.information2.message)
    classInfo2 = await getInfoForModuleCode(data.module2);
  if (!data.information3.message)
    classInfo3 = await getInfoForModuleCode(data.module3);
  if (!data.information4.message)
    classInfo4 = await getInfoForModuleCode(data.module4);
  if (!data.information5.message)
    classInfo5 = await getInfoForModuleCode(data.module5);
  if (data.number >= 6 && !data.information6.message)
    classInfo6 = await getInfoForModuleCode(data.module6);
  if (data.number >= 7 && !data.information7.message)
    classInfo7 = await getInfoForModuleCode(data.module7);
  if (data.number >= 8 && !data.information8.message)
    classInfo8 = await getInfoForModuleCode(data.module8);

  var extractedData1,
    extractedData2,
    extractedData3,
    extractedData4,
    extractedData5,
    extractedData6,
    extractedData7,
    extractedData8;

  extractedData1 = moduleData(data.information1, classInfo1);
  extractedData2 = moduleData(data.information2, classInfo2);
  extractedData3 = moduleData(data.information3, classInfo3);
  extractedData4 = moduleData(data.information4, classInfo4);
  extractedData5 = moduleData(data.information5, classInfo5);
  if (data.number >= 6)
    extractedData6 = moduleData(data.information6, classInfo6);
  if (data.number >= 7)
    extractedData7 = moduleData(data.information7, classInfo7);
  if (data.number >= 8)
    extractedData8 = moduleData(data.information8, classInfo8);
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
