const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");
const getInfoForModuleCode = require("./moduleInfo");

const algorithm = async (data) => {
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
  //mod1 takes priority

  let j = 0;
  let bool = true;

  console.log(data.extractedData1.tutDetails);
  if (data.extractedData1.tutDetails) {
    for (let i = 0; i < data.extractedData1.tutDetails.length; i++) {
      if (data.extractedData1.tutDetails === "Choose") {
        while (bool) {
          data.extractedData1.tutDetails = [
            (await getInfoForModuleCode(data.extractedData1.modCode)).tutInfo[
              j
            ],
          ];
          console.log(data.extractedData1.tutDetails[i]);
          NEW_week_arr = deleteTime(
            week_arr,
            whichDay(data.extractedData1.tutDetails[i]),
            data.extractedData1.tutDetails[i],
            true
          );
          if (NEW_week_arr) {
            week_arr = NEW_week_arr;
            bool = false;
          } else j++;
        }
      } else {
        //did not check clashes in preferred slots
        week_arr = deleteTime(
          week_arr,
          whichDay(data.extractedData1.tutDetails[i]),
          data.extractedData1.tutDetails[i],
          false
        );
      }
    }
  }
  console.log(week_arr);
};

module.exports = algorithm;
