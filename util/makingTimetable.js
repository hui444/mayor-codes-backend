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
      //CHECK IF THE CLASSNO ARE THE SAME!!!!!!!!!!
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
    }
    i++;
  }

  if (tut) {
    if (tut === 1) {
      tutClassMust[0] = moduleCode + " Tutorial " + tutorialType[0].classNo;
    }
    ++j;
    lessons[j] = "Tut";
  }
  if (lec) {
    if (lec === 1) {
      lecClassMust[0] = moduleCode + " Lecture " + lectureType[0].classNo;
    }
    ++j;
    lessons[j] = "Lec";
  }
  if (sec) {
    if (sec === 1) {
      secClassMust[0] = moduleCode + " Sectional " + sectionalType[0].classNo;
    }
    ++j;
    lessons[j] = "Sec";
  }
  if (lab) {
    if (lab === 1) {
      labClassMust[0] = moduleCode + " Laboratory " + laboratoryType[0].classNo;
    }
    ++j;
    lessons[j] = "Lab";
  }
  if (rec) {
    if (rec === 1) {
      recClassMust[0] = moduleCode + " Recitation " + recitationType[0].classNo;
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
