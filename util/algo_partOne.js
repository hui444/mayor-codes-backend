const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const algo_partOne = async (
  classDetails,
  classInfo,
  uniqueClassInfo,
  uniqueClasses,
  week_arr
) => {
  let error = false,
    goNextClass = false,
    i;
  if (classDetails) {
    if (classDetails !== "Choose") {
      var classSlot = classDetails[classDetails.length - 1];
      return { week_arr, classSlot, error };
    }
    // console.log(week_arr);
    if (classDetails === "Choose") {
      var slotFound = false,
        j = 0,
        classSlot;
      while (!slotFound) {
        let NEW_week_arr = [];
        classDetails = classInfo.filter((x) => {
          return x.classNo === uniqueClassInfo[j];
        }); //generate class information and classNo
        let WeekIndex = 0; //set weekIndex to 0
        console.log(" THIS IS FROM LINE 30");
        console.log(classDetails[0].classNo);
        for (i = 0; i < classDetails.length; i += 1) {
          //i is the index of classDetails
          let k = classDetails[i].weeks[WeekIndex]; //k = week number

          console.log(i, " THIS IS I FROM LINE 32");
          while (k <= classDetails[i].weeks[classDetails[i].weeks.length - 1]) {
            //while week number <= last week number
            //make new array for the current week
            NEW_week_arr[k - 1] = await deleteTime(
              week_arr[k - 1][0],
              whichDay(classDetails[i]),
              classDetails[i],
              true
            );
            // console.log(week_arr[k][0]);
            // console.log(week_arr[k - 1][0]);
            //if new week array exits - slot fits
            if (NEW_week_arr[k - 1]) {
              //if this is the last week and the slot fits, go check next class
              if (
                k === classDetails[i].weeks[classDetails[i].weeks.length - 1]
              ) {
                //finished deleting
                week_arr[k - 1][0] = NEW_week_arr[k - 1];
                classSlot = classDetails[i];
                slotFound = true;
                goNextClass = true;
                break;
                // return { week_arr, classSlot, error };
              } else {
                //delete next week
                WeekIndex += 1;
                k = classDetails[i].weeks[WeekIndex];
                console.log(k, "THIS IS FROM LINE 58");
                console.log(
                  classDetails[i].weeks[classDetails[i].weeks.length - 1]
                );
                continue;
              }
            } else {
              if (j >= uniqueClasses - 1) {
                //none of the classes fit
                classDetails = classInfo.filter((x) => {
                  return x.classNo === uniqueClassInfo[0];
                });
                error = true;
                console.log("help");
                for (let m = 0; m < classDetails.length; m++) {
                  let WeekIndex2 = 0;
                  let k = classDetails[m].weeks[WeekIndex2];
                  while (
                    k <= classDetails[m].weeks[classDetails[m].weeks.length - 1]
                  ) {
                    week_arr[k - 1][0] = await deleteTime(
                      week_arr[k - 1][0],
                      whichDay(classDetails[m]),
                      classDetails,
                      false
                    );
                    WeekIndex2++;
                    k = classDetails[m].weeks[WeekIndex2];
                  }
                  classSlot = classDetails[i];
                }
                return { week_arr, classSlot, error };
              }
              //current classNo doesnt fit, go to next classNo
              // console.log(NEW_week_arr[k - 1]);
              goNextClass = true;
              j++;
              break;
            }
          }
          if (goNextClass) {
            goNextClass = false;
            break;
          } else continue;
        }
      }
    }
  }
  return { week_arr, classSlot, error };
};

module.exports = algo_partOne;
