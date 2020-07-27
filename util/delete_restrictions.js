const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const delete_restrictions = async (classDetails, week_arr) => {
  if (classDetails) {
    if (classDetails !== "Choose") {
      for (let i = 0; i < classDetails.length; i++) {
        var classSlot = classDetails[i];
        //did not check clashes in preferred slots
        let weekIndex = 0;
        let k = classSlot.weeks[weekIndex];
        while (k <= classSlot.weeks[classSlot.weeks.length - 1]) {
          week_arr[k - 1] = await deleteTime(
            week_arr[k - 1],
            await whichDay(classSlot),
            classSlot
          );
          weekIndex++;
          k = classSlot.weeks[weekIndex];
        }
      }
    }
  }
  return week_arr;
};

module.exports = delete_restrictions;
