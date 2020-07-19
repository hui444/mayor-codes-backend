const makingTimetable = (moduleCode, data) => {
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
    if (!(data[i].day === "Saturday" || data[i].day === "Sunday")) {
      if (data[i].lessonType === "Tutorial") {
        tutorialType[tut] = data[i].classNo;
        tut++;
      } else if (data[i].lessonType === "Lecture") {
        lectureType[lec] = data[i].classNo;
        lec++;
      } else if (data[i].lessonType === "Sectional Teaching") {
        sectionalType[sec] = data[i].classNo;
        sec++;
      } else if (data[i].lessonType === "Laboratory") {
        laboratoryType[lab] = data[i].classNo;
        lab++;
      } else if (data[i].lessonType === "Recitation") {
        recitationType[rec] = data[i].classNo;
        rec++;
      } else {
        console.log(data[i]);
        break;
      } //not of known type/undefined
    }
    i++;
  }

  //Remove duplicated classNo
  tutorialType = Array.from(new Set(tutorialType));
  lectureType = Array.from(new Set(lectureType));
  sectionalType = Array.from(new Set(sectionalType));
  laboratoryType = Array.from(new Set(laboratoryType));
  recitationType = Array.from(new Set(recitationType));

  //Reset to number of unique classes
  tut = tutorialType.length;
  lec = lectureType.length;
  sec = sectionalType.length;
  lab = laboratoryType.length;
  rec = recitationType.length;

  if (tut) {
    if (tut === 1) {
      tutClassMust[0] = moduleCode + " Tutorial " + tutorialType[0];
    }
    ++j;
    lessons[j] = "Tut";
  }
  if (lec) {
    if (lec === 1) {
      lecClassMust[0] = moduleCode + " Lecture " + lectureType[0];
    }
    ++j;
    lessons[j] = "Lec";
  }
  if (sec) {
    if (sec === 1) {
      secClassMust[0] = moduleCode + " Sectional " + sectionalType[0];
    }
    ++j;
    lessons[j] = "Sec";
  }
  if (lab) {
    if (lab === 1) {
      labClassMust[0] = moduleCode + " Laboratory " + laboratoryType[0];
    }
    ++j;
    lessons[j] = "Lab";
  }
  if (rec) {
    if (rec === 1) {
      recClassMust[0] = moduleCode + " Recitation " + recitationType[0];
    }
    ++j;
    lessons[j] = "Rec";
  }

  //fill classes array with compulsory lessons (no choosing)
  if (tutClassMust[0]) classes = [].concat(classes, tutClassMust);
  if (lecClassMust[0]) classes = [].concat(classes, lecClassMust);
  if (secClassMust[0]) classes = [].concat(classes, secClassMust);
  if (labClassMust[0]) classes = [].concat(classes, labClassMust);
  if (recClassMust[0]) classes = [].concat(classes, recClassMust);

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
