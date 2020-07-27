const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const algo_partFive = async (
  classDetails,
  classInfo,
  uniqueClassNo,
  numUniqueClass,
  week_arr
) => {
  var error = false;
  const weekArr = week_arr;
  console.log("this is from line 13");
  console.log(weekArr[4][0][2]);
  if (classDetails) {
    if (classDetails !== "Choose") {
      var classSlot = classDetails[classDetails.length - 1];
      return { week_arr, classSlot, error };
    } else {
      //classDetails = "Choose"
      var j = 0,
        classSlot;
      while (true) {
        var weekIndex = 0,
          goNextClass = false,
          weekNum,
          NEW_week_arr = week_arr,
          temp_arr;

        if (j >= numUniqueClass - 1) console.log("hi");
        //generate class information and classNo
        classDetails = await classInfo.filter((x) => {
          return x.classNo === uniqueClassNo[j];
        });

        //loop the number of classes this classNo has
        for (let i = 0; i <= classDetails.length - 1; i++) {
          weekNum = classDetails[i].weeks[weekIndex];
          //loop the number of week for this class
          while (
            weekNum <= classDetails[i].weeks[classDetails[i].weeks.length - 1]
          ) {
            //returns either new array or same
            temp_arr = await deleteTime(
              NEW_week_arr[weekNum - 1][0],
              whichDay(classDetails[i]),
              classDetails[i],
              true
            );
            console.log(weekNum);
            console.log(temp_arr.clash);
            if (temp_arr.clash) {
              //class does not fit
              if (j >= numUniqueClass - 1) {
                //all classes dont fit
                error = true;
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
              }
              console.log(NEW_week_arr[4][0][2]);
              console.log(weekArr[4][0][2]);
              for (let t = weekNum; t >= 1; t--) {
                console.log(t);
                NEW_week_arr[t - 1][0] = weekArr[t - 1][0];
              }
              console.log("DID IT GO THROUGH HERE??????????????!!");
              console.log(NEW_week_arr[4][0][2]);
              console.log(weekArr[4][0][2]);
              goNextClass = true;
              break;
            } else {
              //class fits this week
              //current classSlot fits if this week is the last week
              if (
                weekNum ===
                classDetails[i].weeks[classDetails[i].weeks.length - 1]
              ) {
                //all slots for this class fits and is deleted
                if (i === classDetails.length - 1) {
                  week_arr = NEW_week_arr;
                  classSlot = classDetails[i];
                  error = false;
                  return { week_arr, classSlot, error };
                }
                //check next class slot, of same number
                goNextClass = false;
                break;
              }
              //check next week
              NEW_week_arr[weekNum - 1][0] = temp_arr.weekArr;
              weekIndex++;
              weekNum = classDetails[i].weeks[weekIndex];
              continue;
            }
          }
          console.log(goNextClass, "this is goNextClass");
          if (goNextClass) {
            if (j < numUniqueClass - 1) j++;
            console.log(j, "this is j");
            break;
          }
        }
      }
    }
  }
};

module.exports = algo_partFive;
