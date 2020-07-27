const checkSlot = require("./checkSlot");
const whichDay = require("./whichDay");
const deleteTime = require("./deleteTime");

const algo_partSix = async (
  classDetails,
  classInfo,
  uniqueClassNo,
  numUniqueClass,
  week_arr
) => {
  var error = false;
  if (classDetails) {
    if (classDetails !== "Choose") {
      var classSlot = classDetails[classDetails.length - 1];
      return { week_arr, classSlot, error };
    } else {
      //classDetails = "Choose"
      var j = 0,
        classSlot;
      //slot not found
      while (true) {
        var generateNewClass;
        //generate class information and classNo
        classDetails = await classInfo.filter((x) => {
          return x.classNo === uniqueClassNo[j];
        });

        //check if all classes of this classNo fits
        //loop the number of classes this classNo has
        for (let i = 0; i <= classDetails.length - 1; i++) {
          var weekIndex = 0;
          var weekNum = classDetails[i].weeks[weekIndex];

          //loop the number of weeks this class has
          while (
            weekNum <= classDetails[i].weeks[classDetails[i].weeks.length - 1]
          ) {
            //check if class fits
            var fits = await checkSlot(
              week_arr[weekNum - 1],
              whichDay(classDetails[i]),
              classDetails[i]
            );

            //class doesnt fit, generate next class info
            if (!fits) {
              if (j === numUniqueClass - 1) {
                //all classes did not fit, default take first slot
                classDetails = await classInfo.filter((x) => {
                  return x.classNo === uniqueClassNo[0];
                });
                //loop all classes in found class slot
                for (let k = 0; k <= classDetails.length - 1; k++) {
                  var weekIndex3 = 0;
                  var weekNum3 = classDetails[k].weeks[weekIndex3];
                  //loop weeks of class
                  while (
                    weekNum3 <=
                    classDetails[k].weeks[classDetails[k].weeks.length - 1]
                  ) {
                    week_arr[weekNum3 - 1] = await deleteTime(
                      week_arr[weekNum3 - 1],
                      whichDay(classDetails[k]),
                      classDetails[k]
                    );
                    weekIndex3++;
                    weekNum3 = classDetails[k].weeks[weekIndex3];
                  }
                }
                //all classes deleted, week array returned
                classSlot = classDetails[classDetails.length - 1];
                error = true;
                return { week_arr, classSlot, error };
              }
              j++;
              generateNewClass = true;
              break;
            }
            //class fits, check next week
            generateNewClass = false;
            weekIndex++;
            weekNum = classDetails[i].weeks[weekIndex];
          }
          if (generateNewClass) break;

          //checked all classes and found class slot, delete class slot and return week_arr
          if (i === classDetails.length - 1) {
            // console.log("it came through");
            //loop all classes in found class slot
            for (let m = 0; m <= classDetails.length - 1; m++) {
              var weekIndex2 = 0;
              var weekNum2 = classDetails[m].weeks[weekIndex2];

              //loop weeks of class
              while (
                weekNum2 <=
                classDetails[m].weeks[classDetails[m].weeks.length - 1]
              ) {
                week_arr[weekNum2 - 1] = await deleteTime(
                  week_arr[weekNum2 - 1],
                  whichDay(classDetails[m]),
                  classDetails[m]
                );
                weekIndex2++;
                weekNum2 = classDetails[m].weeks[weekIndex2];
              }
            }
            //all classes deleted, week array returned
            classSlot = classDetails[classDetails.length - 1];
            error = false;
            return { week_arr, classSlot, error };
          }
        }
      }
    }
  }
  console.log("there is a problem");
  return { week_arr, classSlot, error };
};

module.exports = algo_partSix;
