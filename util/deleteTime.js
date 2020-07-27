const deleteTime = (weekArr, day, classDetails) => {
  var duration;

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
};

module.exports = deleteTime;
