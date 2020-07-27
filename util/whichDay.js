const whichDay = (classDetails) => {
  if (classDetails.day === "Monday") return 0;
  else if (classDetails.day === "Tuesday") return 1;
  else if (classDetails.day === "Wednesday") return 2;
  else if (classDetails.day === "Thursday") return 3;
  else if (classDetails.day === "Friday") return 4;
};

module.exports = whichDay;
