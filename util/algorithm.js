const algo_partTwo = require("./algo_partTwo");
const algo_partOne = require("./algo_partOne");
const getInfoForModuleCode = require("./moduleInfo");
const makingTimetable = require("./makingTimetable");
const HttpError = require("../models/http-error");

const algorithm = async (data, ranking) => {
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
  var err;

  //   if (ranking) {
  mod1Result = await algo_partTwo(
    data.extractedData1.modCode,
    data.extractedData1,
    NEW_week_arr,
    week_arr
  );
  week_arr = mod1Result.week_arr;
  mod2Result = await algo_partTwo(
    data.extractedData2.modCode,
    data.extractedData2,
    NEW_week_arr,
    week_arr
  );
  week_arr = mod2Result.week_arr;
  mod3Result = await algo_partTwo(
    data.extractedData3.modCode,
    data.extractedData3,
    NEW_week_arr,
    week_arr
  );
  week_arr = mod3Result.week_arr;
  mod4Result = await algo_partTwo(
    data.extractedData4.modCode,
    data.extractedData4,
    NEW_week_arr,
    week_arr
  );
  week_arr = mod4Result.week_arr;
  mod5Result = await algo_partTwo(
    data.extractedData5.modCode,
    data.extractedData5,
    NEW_week_arr,
    week_arr
  );
  week_arr = mod5Result.week_arr;

  //   console.log(week_arr);
  mod1Slots = mod1Result.modSlots;
  mod2Slots = mod2Result.modSlots;
  mod3Slots = mod3Result.modSlots;
  mod4Slots = mod4Result.modSlots;
  mod5Slots = mod5Result.modSlots;

  err =
    mod1Result.error ||
    mod2Result.error ||
    mod3Result.error ||
    mod4Result.error ||
    mod5Result.error;

  //   } else {
  //     //sort the classes, least to most flexible
  //     var class1, class2, class3, class4;
  //     var class1TUT, class1LEC, class1SEC, class1LAB, class1REC;
  //     if (data.extractedData1.tutDetails === "Choose") {
  //       class1TUT = (await getInfoForModuleCode(data.extractedData1.modCode)).tut;
  //     } else {
  //       algo_partOne(
  //         data.extractedData1.tutDetails,
  //         (await getInfoForModuleCode(data.extractedData1.modCode)).tutInfo,
  //         NEW_week_arr,
  //         week_arr
  //       );
  //     }

  //     if (data.extractedData1.lecDetails === "Choose") {
  //       class1LEC = (await getInfoForModuleCode(data.extractedData1.modCode)).lec;
  //     } else {
  //       algo_partOne(
  //         data.extractedData1.lecDetails,
  //         (await getInfoForModuleCode(data.extractedData1.modCode)).lecInfo,
  //         NEW_week_arr,
  //         week_arr
  //       );
  //     }

  //     if (data.extractedData1.secDetails === "Choose") {
  //       class1SEC = (await getInfoForModuleCode(data.extractedData1.modCode)).sec;
  //     } else {
  //       algo_partOne(
  //         data.extractedData1.secDetails,
  //         (await getInfoForModuleCode(data.extractedData1.modCode)).secInfo,
  //         NEW_week_arr,
  //         week_arr
  //       );
  //     }

  //     if (data.extractedData1.labDetails === "Choose") {
  //       class1LAB = (await getInfoForModuleCode(data.extractedData1.modCode)).lab;
  //     } else {
  //       algo_partOne(
  //         data.extractedData1.labDetails,
  //         (await getInfoForModuleCode(data.extractedData1.modCode)).labInfo,
  //         NEW_week_arr,
  //         week_arr
  //       );
  //     }
  //     if (data.extractedData1.recDetails === "Choose") {
  //       class1REC = (await getInfoForModuleCode(data.extractedData1.modCode)).rec;
  //     } else {
  //       algo_partOne(
  //         data.extractedData1.recDetails,
  //         (await getInfoForModuleCode(data.extractedData1.modCode)).recInfo,
  //         NEW_week_arr,
  //         week_arr
  //       );
  //     }

  //     var arr;
  //     console.log(class1TUT, class1LEC, class1SEC, class1LAB, class1REC);
  //   }
  return { mod1Slots, mod2Slots, mod3Slots, mod4Slots, mod5Slots, err };
};

module.exports = algorithm;
