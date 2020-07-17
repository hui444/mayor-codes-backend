const makingTimetable = (data) => {
  var lessons = [],
    classes = [];

  var tutorialType = [];
  var lectureType = [];
  var sectionalType = [];
  var laboratoryType = [];
  var recitationType = [];

  var tut = 0,
    lec = 0,
    sec = 0,
    lab = 0,
    rec = 0;

  var i = 0,
    j = -1;

  var tutClassMust = [],
    lecClassMust = [],
    secClassMust = [],
    labClassMust = [],
    recClassMust = [];

  while (data[i]) {
    if (data[i].lessonType === "Tutorial") {
      tutorialType[tut] = data[i];
      tut++;
    } else if (data[i].lessonType === "Lecture") {
      lectureType[lec] = data[i];
      lec++;
    } else if (data[i].lessonType === "Sectional Teaching") {
      sectionalType[sec] = data[i];
      sec++;
    } else if (data[i].lessonType === "Laboratory") {
      laboratoryType[lab] = data[i];
      lab++;
    } else if (data[i].lessonType === "Recitation") {
      recitationType[rec] = data[i];
      rec++;
    } else {
      console.log(data[i]);
      break;
    } //not of known type/undefined
    i++;
  }

  if (tut) {
    if (tut === 1) {
      tutClassMust[0] = tutorialType[0].classNo;
    } else {
      tutClassMust[0] = "Please Choose tutorial";
    }
    ++j;
    lessons[j] = "Tut";
  }
  if (lec) {
    if (lec === 1) {
      lecClassMust[0] = lectureType[0].classNo;
    } else {
      lecClassMust[0] = "Please Choose lecture";
    }
    ++j;
    lessons[j] = "Lec";
  }
  if (sec) {
    if (sec === 1) {
      secClassMust[0] = sectionalType[0].classNo;
    } else {
      secClassMust[0] = "Please Choose sectional";
    }
    ++j;
    lessons[j] = "Sec";
  }
  if (lab) {
    if (lab === 1) {
      labClassMust[0] = laboratoryType[0].classNo;
    } else {
      labClassMust[0] = "Please Choose laboratory";
    }
    ++j;
    lessons[j] = "Lab";
  }
  if (rec) {
    if (rec === 1) {
      recClassMust[0] = recitationType[0].classNo;
    } else {
      recClassMust[0] = "Please Choose recitation";
    }
    ++j;
    lessons[j] = "Rec";
  }

  //fill classes array with compulsory lessons (no choosing)
  if (tutClassMust[0]) classes.push(tutClassMust);
  if (lecClassMust[0]) classes.push(lecClassMust);
  if (secClassMust[0]) classes.push(secClassMust);
  if (labClassMust[0]) classes.push(labClassMust);
  if (recClassMust[0]) classes.push(recClassMust);

  return {
    lessons,
    classes,
    tutorialType,
    tut,
    lectureType,
    lec,
    sectionalType,
    sec,
    laboratoryType,
    lab,
    recitationType,
    rec,
  };
};

module.exports = makingTimetable;
