const deleteTime = require("./deleteTime");
const whichDay = require("./whichDay");

const algorithm = (data) => {
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

  var week_arr = [mon, tue, wed, thu, fri];
  //mod1 takes priority
  console.log(data.extractedData1.tutDetails);
  if (data.extractedData1.tutDetails) {
    for (let i = 0; i < data.extractedData1.tutDetails.length; i++) {
      if (data.extractedData1.tutDetails === "Choose") {
        break;
      } else {
        week_arr = deleteTime(
          week_arr,
          whichDay(data.extractedData1.tutDetails[i]),
          data.extractedData1.tutDetails[i]
        );
      }
    }
  }
  //   console.log(week_arr);
};

module.exports = algorithm;
