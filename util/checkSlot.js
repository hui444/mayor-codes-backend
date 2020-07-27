const checkSlot = (weekArr, day, classDetails) => {
  var duration, fits;
  //check if day includes start time of class
  if (weekArr[day].includes(parseInt(classDetails.startTime))) {
    duration = classDetails.endTime - classDetails.startTime;
    //check if day includes duration of class
    for (let i = 100; i < duration; i += 100) {
      var calTime = parseInt(classDetails.startTime) + i;
      //day does not include time, class slot didnt fit
      if (!weekArr[day].includes(calTime)) {
        fits = false;
        return fits;
      }
    }
    //finished checking all times of class and class fits
    fits = true;
    return fits;
  } else {
    fits = false;
    return fits;
  }
};

module.exports = checkSlot;
