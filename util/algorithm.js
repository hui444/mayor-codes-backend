const algo_partTwo = require("./algo_partTwo");
const algo_partThree = require("./algo_partThree");
const initial_weeks = require("./initial_weeks");

const algorithm = async (data, number) => {
  let initialise = initial_weeks();
  var week_arr = [
    initialise.week1,
    initialise.week2,
    initialise.week3,
    initialise.week4,
    initialise.week5,
    initialise.week6,
    initialise.week7,
    initialise.week8,
    initialise.week9,
    initialise.week10,
    initialise.week11,
    initialise.week12,
    initialise.week13,
  ];

  var mod1Result,
    mod2Result,
    mod3Result,
    mod4Result,
    mod5Result,
    mod6Result,
    mod7Result,
    mod8Result;

  var mod1Slots,
    mod2Slots,
    mod3Slots,
    mod4Slots,
    mod5Slots,
    mod6Slots,
    mod7Slots,
    mod8Slots;

  var err;

  //delete all preferred slots/restrictions
  week_arr = await algo_partThree(data.extractedData1, week_arr);
  week_arr = await algo_partThree(data.extractedData2, week_arr);
  week_arr = await algo_partThree(data.extractedData3, week_arr);
  week_arr = await algo_partThree(data.extractedData4, week_arr);
  week_arr = await algo_partThree(data.extractedData5, week_arr);
  if (number >= 6)
    week_arr = await algo_partThree(data.extractedData6, week_arr);
  if (number >= 7)
    week_arr = await algo_partThree(data.extractedData7, week_arr);
  if (number >= 8)
    week_arr = await algo_partThree(data.extractedData8, week_arr);

  mod1Result = await algo_partTwo(
    data.extractedData1.modCode,
    data.extractedData1,
    week_arr
  );
  week_arr = mod1Result.week_arr;

  mod2Result = await algo_partTwo(
    data.extractedData2.modCode,
    data.extractedData2,
    week_arr
  );
  week_arr = mod2Result.week_arr;

  mod3Result = await algo_partTwo(
    data.extractedData3.modCode,
    data.extractedData3,
    week_arr
  );
  week_arr = mod3Result.week_arr;

  mod4Result = await algo_partTwo(
    data.extractedData4.modCode,
    data.extractedData4,
    week_arr
  );
  week_arr = mod4Result.week_arr;

  mod5Result = await algo_partTwo(
    data.extractedData5.modCode,
    data.extractedData5,
    week_arr
  );

  if (number >= 6) {
    week_arr = mod5Result.week_arr;

    mod6Result = await algo_partTwo(
      data.extractedData6.modCode,
      data.extractedData6,
      week_arr
    );
  }

  if (number >= 7) {
    week_arr = mod6Result.week_arr;
    mod7Result = await algo_partTwo(
      data.extractedData7.modCode,
      data.extractedData7,
      week_arr
    );
  }

  if (number >= 8) {
    week_arr = mod7Result.week_arr;

    mod8Result = await algo_partTwo(
      data.extractedData8.modCode,
      data.extractedData8,
      week_arr
    );
  }

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

  if (number >= 6) {
    mod6Slots = mod6Result.modSlots;
    err = err || mod6Result.error;
    if (number === 6)
      return {
        mod1Slots,
        mod2Slots,
        mod3Slots,
        mod4Slots,
        mod5Slots,
        mod6Slots,
        err,
      };
  }
  if (number >= 7) {
    mod7Slots = mod7Result.modSlots;
    err = err || mod7Result.error;
    if (number === 7)
      return {
        mod1Slots,
        mod2Slots,
        mod3Slots,
        mod4Slots,
        mod5Slots,
        mod6Slots,
        mod7Slots,
        err,
      };
  }
  if (number >= 8) {
    mod8Slots = mod8Result.modSlots;
    err = err || mod8Result.error;
    return {
      mod1Slots,
      mod2Slots,
      mod3Slots,
      mod4Slots,
      mod5Slots,
      mod6Slots,
      mod7Slots,
      mod8Slots,
      err,
    };
  }

  return { mod1Slots, mod2Slots, mod3Slots, mod4Slots, mod5Slots, err };
};

module.exports = algorithm;
