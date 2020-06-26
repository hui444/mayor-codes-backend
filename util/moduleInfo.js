const axios = require("axios");
const HttpError = require("../models/http-error");

async function getInfoForModuleCode(moduleCode) {
  const response = await axios.get(
    `http://api.nusmods.com/v2/2019-2020/modules/${moduleCode}.json`
  );

  const data = response.data;

  if (!data || data.status === "MODULE_NOT_FOUND") {
    const error = new HttpError(
      "Could not find module information for the specified module code.",
      422
    );
    throw error;
  }

  const information = data.semesterData[0].timetable[0];

  return information;
}

module.exports = getInfoForModuleCode;
