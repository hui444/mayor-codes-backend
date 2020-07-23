const deleteTime = (weekArr, day, classDetails, checkClash) => {
  var duration;

  if (checkClash) {
    if (weekArr[day].includes(parseInt(classDetails.startTime))) {
      duration = classDetails.endTime - classDetails.startTime;
      weekArr[day] = weekArr[day].filter((time) => {
        return time !== parseInt(classDetails.startTime);
      });
      for (let i = 100; i < duration; i += 100) {
        var calTime = parseInt(classDetails.startTime) + i;
        if (!weekArr[day].includes(calTime)) return null;
        else
          weekArr[day] = weekArr[day].filter((time) => {
            return time !== calTime;
          });
      }
    } else return null;

    return weekArr;
  } else {
    duration = classDetails.endTime - classDetails.startTime;
    weekArr[day] = weekArr[day].filter((time) => {
      return time !== parseInt(classDetails.startTime);
    });
    for (let i = 100; i < duration; i += 100) {
      var calTime = parseInt(classDetails.startTime) + i;

      weekArr[day] = weekArr[day].filter((time) => {
        return time !== calTime;
      });
    }

    return weekArr;
  }
};

module.exports = deleteTime;
