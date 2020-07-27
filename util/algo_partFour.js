const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const algo_partFour = async (
  classDetails,
  classInfo,
  uniqueClassNo,
  numUniqueClass,
  week_arr
) => {
  var error = false,
    weekNum,
    weekNum2;

  if (classDetails) {
    const weekArr = week_arr;
    if (classDetails !== "Choose") {
      var classSlot = classDetails[classDetails.length - 1];
      return { week_arr, classSlot, error };
    } else {
      //classDetails = "Choose"
      var slotFound = false,
        classSlot,
        j = 0;
      while (!slotFound) {
        //generate class information and classNo
        classDetails = await classInfo.filter((x) => {
          return x.classNo === uniqueClassNo[j];
        });
        console.log(classDetails[0].classNo);
        var weekIndex = 0,
          goNextClass = false;

        var NEW_week_arr = weekArr,
          temp_NEW_week_arr = weekArr;
        //loop the number of classes this classNo has
        for (let i = 0; i <= classDetails.length - 1; i++) {
          weekNum = classDetails[i].weeks[weekIndex];

          console.log(NEW_week_arr[12 - 1][0]);
          while (
            weekNum <= classDetails[i].weeks[classDetails[i].weeks.length - 1]
          ) {
            console.log("THIS IS FROM LINE 41");
            console.log(
              weekNum,
              classDetails[i].weeks[classDetails[i].weeks.length - 1]
            );
            console.log("THIS IS FROM LINE 43");
            temp_NEW_week_arr[weekNum - 1][0] = await deleteTime(
              NEW_week_arr[weekNum - 1][0],
              whichDay(classDetails[i]),
              classDetails[i],
              true
            );
            if (temp_NEW_week_arr[weekNum - 1][0]) {
              console.log("CAN YOU SEE THIS");
              console.log(classDetails[0].classNo); //, temp_NEW_week_arr);
            }

            if (temp_NEW_week_arr[weekNum - 1][0]) {
              NEW_week_arr[weekNum - 1][0] = temp_NEW_week_arr[weekNum - 1][0];
              //finished deleting slot i for all weeks
              if (
                weekNum ===
                classDetails[i].weeks[classDetails[i].weeks.length - 1]
              ) {
                console.log(
                  "I have found the slot and deleted the times from all weeks"
                );
                //all slots for this class fits and is deleted
                if (i === classDetails.length - 1) {
                  console.log("did it come here");
                  week_arr = NEW_week_arr;
                  classSlot = classDetails[i];
                  return { week_arr, classSlot, error };
                }
                console.log("this is goNextClass from line 76", goNextClass);
                goNextClass = false;
                break; //go to next i
              } else {
                //delete next week
                weekIndex++;
                weekNum = classDetails[i].weeks[weekIndex];
                continue;
              }
            } else {
              temp_NEW_week_arr = weekArr;
              NEW_week_arr = weekArr;
              //class did not fit
              if (j >= numUniqueClass - 1) {
                //all classes dont fit
                error = true;
                console.length("ALL CLASSES DID NOT FIT");
                classDetails = classInfo.filter((x) => {
                  return x.classNo === uniqueClassNo[0];
                });
                var weekIndex2 = 0;
                for (let m = 0; m <= classDetails.length - 1; m++) {
                  weekNum2 = classDetails[m].weeks[weekIndex2];
                  while (
                    weekNum2 <=
                    classDetails[m].weeks[classDetails[m].weeks.length - 1]
                  ) {
                    week_arr[weekNum2 - 1][0] = await deleteTime(
                      week_arr[weekNum2 - 1][0],
                      whichDay(classDetails[m]),
                      classDetails,
                      false
                    );
                    weekIndex2++;
                    weekNum2 = classDetails[m].weeks[weekIndex2];
                  }
                  if (m === classDetails.length) {
                    //all slots deleted for all weeks
                    classSlot = classDetails[m];
                    return { week_arr, classSlot, error };
                  }
                }
              } else {
                //go to next class
                goNextClass = true;
                console.log("going to next class", goNextClass);
                NEW_week_arr = weekArr;
                temp_NEW_week_arr = weekArr;
                break;
              }
            }
          }
          console.log("this is goNextClass from line 123", goNextClass);
          if (goNextClass) break;
        }
        console.log("this is goNextClass from line 127", goNextClass);
        if (goNextClass) {
          console.log("this is line 134");
          console.log(weekArr);
          NEW_week_arr[12 - 1][0] = weekArr[12 - 1][0];
          console.log("this is line 137");
          console.log(NEW_week_arr[12 - 1][0]);
          temp_NEW_week_arr = weekArr;
          j++;
        }
      }
    }
  }
  return { week_arr, classSlot, error };
};

module.exports = algo_partFour;
