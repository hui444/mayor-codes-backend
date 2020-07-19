const axios = require("axios");
const HttpError = require("../models/http-error");

const makingTimetable = require("./makingTimetable");

async function getInfoForModuleCode(moduleCode) {
  const response = await axios.get(
    `http://api.nusmods.com/v2/2020-2021/modules/${moduleCode}.json`
  );

  const data = response.data;

  if (!data || data.status === "MODULE_NOT_FOUND") {
    const error = new HttpError(
      "Could not find module information for the specified module code.",
      422
    );
    throw error;
  }

  const information = makingTimetable(
    moduleCode,
    data.semesterData[0].timetable
  );

  return information;
}

module.exports = getInfoForModuleCode;
