const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");
const getInfoForModuleCode = require("./moduleInfo");
const algo_part = require("./algo_part");

const algorithm = async (data) => {
  var tutSlot, lecSlot, secSlot, labSlot, recSlot, message;

  var mon = [
      0800,
      0900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2000,
      2100,
    ], //8am to 10pm
    tue = [
      0800,
      0900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2000,
      2100,
    ],
    wed = [
      0800,
      0900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2000,
      2100,
    ],
    thu = [
      0800,
      0900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2000,
      2100,
    ],
    fri = [
      0800,
      0900,
      1000,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2000,
      2100,
    ];

  var week_arr = [mon, tue, wed, thu, fri],
    NEW_week_arr;
  //mod1 takes priority

  console.log(data.extractedData1);
  var tutdata1 = await algo_part(
    data.extractedData1.tutDetails,
    (await getInfoForModuleCode(data.extractedData1.modCode)).tutInfo,
    NEW_week_arr,
    week_arr
  );
  week_arr = tutdata1.week_arr;
  tutSlot = tutdata1.classSlot.classNo;

  var labdata1 = await algo_part(
    data.extractedData1.labDetails,
    (await getInfoForModuleCode(data.extractedData1.modCode)).labInfo,
    NEW_week_arr,
    week_arr
  );
  week_arr = labdata1.week_arr;
  labSlot = labdata1.classSlot.classNo;
  //   console.log(tutSlot);
  console.log(week_arr);

  var mod1Results = { tutSlot, lecSlot, secSlot, labSlot, recSlot };
  return { mod1Results };
};

module.exports = algorithm;
