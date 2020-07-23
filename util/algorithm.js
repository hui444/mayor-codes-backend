const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");
const getInfoForModuleCode = require("./moduleInfo");
const algo_partOne = require("./algo_partOne");
const algo_partTwo = require("./algo_partTwo");

const algorithm = async (data) => {
  var tutSlot = null,
    lecSlot = null,
    secSlot = null,
    labSlot = null,
    recSlot = null,
    message;

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
  var mod1Result, mod2Result, mod3Result, mod4Result, mod5Result;
  var mod1Slots, mod2Slots, mod3Slots, mod4Slots, mod5Slots;
  //mod1 takes priority

  console.log(data.extractedData1);
  mod1Result = await algo_partTwo(data.extractedData1, NEW_week_arr, week_arr);
  week_arr = mod1Result.week_arr;
  mod2Result = await algo_partTwo(data.extractedData2, NEW_week_arr, week_arr);
  week_arr = mod2Result.week_arr;
  mod3Result = await algo_partTwo(data.extractedData3, NEW_week_arr, week_arr);
  week_arr = mod3Result.week_arr;
  mod4Result = await algo_partTwo(data.extractedData4, NEW_week_arr, week_arr);
  week_arr = mod4Result.week_arr;
  mod5Result = await algo_partTwo(data.extractedData5, NEW_week_arr, week_arr);
  week_arr = mod5Result.week_arr;

  //   console.log(week_arr);
  mod1Slots = mod1Result.modSlots;
  mod2Slots = mod2Result.modSlots;
  mod3Slots = mod3Result.modSlots;
  mod4Slots = mod4Result.modSlots;
  mod5Slots = mod5Result.modSlots;

  return { mod1Slots, mod2Slots, mod3Slots, mod4Slots, mod5Slots };
};

module.exports = algorithm;
