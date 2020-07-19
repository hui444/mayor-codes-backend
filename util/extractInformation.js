const getInfoForModuleCode = require("./moduleInfo");
const moduleData = require("./moduleData");

const extractInformation = async (data) => {
  //data includes module1-module5, each tutSlot, lecSlot, secSlot, labSlot, recSlot and message and number of modules

  //assume 5 modules
  const module1 = data.module1;
  const module2 = data.module2;
  const module3 = data.module3;
  const module4 = data.module4;
  const module5 = data.module5;

  var classInfo1, classInfo2, classInfo3, classInfo4, classInfo5;

  //if message exits, there is no information available for that module
  /* getInfoForModuleCode returns lessons, classes, tutorialType, tutInfo, tut, lectureType, 
  lecInfo, lec, sectionalType, secInfo, sec, laboratoryType, labInfo, lab, recitationType, 
  recInfo, rec */
  if (!data.information1.message)
    classInfo1 = await getInfoForModuleCode(module1);
  if (!data.information2.message)
    classInfo2 = await getInfoForModuleCode(module2);
  if (!data.information3.message)
    classInfo3 = await getInfoForModuleCode(module3);
  if (!data.information4.message)
    classInfo4 = await getInfoForModuleCode(module4);
  if (!data.information5.message)
    classInfo5 = await getInfoForModuleCode(module5);

  var extractedData1,
    extractedData2,
    extractedData3,
    extractedData4,
    extractedData5;

  extractedData1 = moduleData(data.information1, classInfo1);
  extractedData2 = moduleData(data.information2, classInfo2);
  extractedData3 = moduleData(data.information3, classInfo3);
  extractedData4 = moduleData(data.information4, classInfo4);
  extractedData5 = moduleData(data.information5, classInfo5);

  return {
    extractedData1,
    extractedData2,
    extractedData3,
    extractedData4,
    extractedData5,
  };
};

module.exports = extractInformation;
