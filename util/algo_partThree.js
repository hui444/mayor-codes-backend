const delete_restrictions = require("./delete_restrictions");

const algo_partThree = async (extractedData, week_arr) => {
  if (extractedData.message) {
    return week_arr;
  } else {
    if (extractedData.tutDetails) {
      week_arr = await delete_restrictions(extractedData.tutDetails, week_arr);
    }
    if (extractedData.lecDetails) {
      week_arr = await delete_restrictions(extractedData.lecDetails, week_arr);
    }
    if (extractedData.labDetails) {
      week_arr = await delete_restrictions(extractedData.labDetails, week_arr);
    }
    if (extractedData.secDetails) {
      week_arr = await delete_restrictions(extractedData.secDetails, week_arr);
    }
    if (extractedData.recDetails) {
      week_arr = await delete_restrictions(extractedData.recDetails, week_arr);
    }
  }
  return week_arr;
};

module.exports = algo_partThree;
