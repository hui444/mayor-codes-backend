const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const algo_part = async (classDetails, classInfo, NEW_week_arr, week_arr) => {
  let bool = true,
    j = 0,
    classSlot;
  if (classDetails) {
    for (let i = 0; i < classDetails.length; i++) {
      if (classDetails === "Choose") {
        // console.log(classInfo[j]);
        while (bool) {
          classDetails = classInfo.filter((x) => {
            return x.classNo === classInfo[j].classNo;
          });
          console.log("/--------------------------------------");
          console.log(classDetails);
          console.log("--------------------------------------/");
          NEW_week_arr = deleteTime(
            week_arr,
            whichDay(classDetails[i]),
            classDetails[i],
            true
          );
          if (NEW_week_arr) {
            // console.log(classDetails);
            week_arr = NEW_week_arr;
            classSlot = classDetails[i];
            bool = false;
          } else j++;

          if (j >= classInfo.length) {
            console.log("help");
            classDetails = [classInfo[0]];
            console.log(classDetails);
            week_arr = deleteTime(
              week_arr,
              whichDay(classDetails[i]),
              classDetails[i],
              false
            );
            classSlot = classDetails[i];
            break;
          }
        }
      } else {
        classSlot = classDetails[i];
        //did not check clashes in preferred slots
        week_arr = deleteTime(
          week_arr,
          whichDay(classDetails[i]),
          classDetails[i],
          false
        );
      }
    }
  }
  //   console.log(classSlot);
  return { week_arr, classSlot };
};

module.exports = algo_part;
