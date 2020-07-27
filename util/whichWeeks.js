const whichWeeks = (data) => {
  let first, last, jump;
  if (data.weeks) {
    first = data.weeks[0];
    last = data.weeks[data.weeks.length - 1];
    jump = data.weeks[1] - data.weeks[0];
    return { first, last, jump };
  }
};

module.exports = whichWeeks;
