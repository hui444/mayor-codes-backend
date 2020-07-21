const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const getInfoForModuleCode = require("../util/moduleInfo");
const ModuleSetFive = require("../models/ModuleSetFive");
const ModuleSetSix = require("../models/ModuleSetSix");
const ModuleSetSeven = require("../models/ModuleSetSeven");
const ModuleSetEight = require("../models/ModuleSetEight");
const CustomModuleSetFive = require("../models/CustomModuleSetFive");
const preferredSlot = require("../util/preferredSlot");
const extractInformation = require("../util/extractInformation");
const CustomModuleSetSix = require("../models/CustomModuleSetSix");

const getInputModulesbyId = async (req, res, next) => {
  const setModulesId = req.params.msid;

  let setModules;
  try {
    setModules =
      (await ModuleSetFive.findById(setModulesId)) ||
      (await ModuleSetSix.findById(setModulesId)) ||
      (await ModuleSetSeven.findById(setModulesId)) ||
      (await ModuleSetEight.findById(setModulesId));
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find modules.",
      500
    );
    return next(error);
  }

  if (!setModules) {
    const error = new HttpError(
      "Could not find modules for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ setModules: setModules.toObject({ getters: true }) });
};

//--------------------------------------------------------------------------

const getTimetableInfobyId = async (req, res, next) => {
  const timetableId = req.params.tid;

  let timetableInfo;
  try {
    timetableInfo =
      (await CustomModuleSetFive.findById(timetableId)) ||
      (await CustomModuleSetSix.findById(timetableId));
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find timetable information.",
      500
    );
    return next(error);
  }

  if (!timetableInfo) {
    const error = new HttpError(
      "Could not find timetable information for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ timetableInfo: timetableInfo.toObject({ getters: true }) });
};

//--------------------------------------------------------------------------

const createModuleSetFive = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { module1, module2, module3, module4, module5 } = req.body;

  let moduleInformation1;
  try {
    moduleInformation1 = await getInfoForModuleCode(module1.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation2;
  try {
    moduleInformation2 = await getInfoForModuleCode(module2.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation3;
  try {
    moduleInformation3 = await getInfoForModuleCode(module3.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation4;
  try {
    moduleInformation4 = await getInfoForModuleCode(module4.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation5;
  try {
    moduleInformation5 = await getInfoForModuleCode(module5.toUpperCase());
  } catch (error) {
    return next(error);
  }

  const createdModuleSetFive = new ModuleSetFive({
    module1: module1.toUpperCase(),
    information1: moduleInformation1,
    module2: module2.toUpperCase(),
    information2: moduleInformation2,
    module3: module3.toUpperCase(),
    information3: moduleInformation3,
    module4: module4.toUpperCase(),
    information4: moduleInformation4,
    module5: module5.toUpperCase(),
    information5: moduleInformation5,
    number: 5,
  });

  try {
    await createdModuleSetFive.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Module Set failed, please try again.",
      500
    );
    return next(error);
  }
  res.status(201).json({ module: createdModuleSetFive });
};

//--------------------------------------------------------------------------

const customiseModuleSetFive = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { mod1Array, mod2Array, mod3Array, mod4Array, mod5Array } = req.body;

  let moduleCustom1;
  try {
    moduleCustom1 = await preferredSlot(mod1Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom2;
  try {
    moduleCustom2 = await preferredSlot(mod2Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom3;
  try {
    moduleCustom3 = await preferredSlot(mod3Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom4;
  try {
    moduleCustom4 = await preferredSlot(mod4Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom5;
  try {
    moduleCustom5 = await preferredSlot(mod5Array);
  } catch (error) {
    return next(error);
  }

  const customisedModuleSetFive = new CustomModuleSetFive({
    module1: moduleCustom1.modCode,
    information1: moduleCustom1,
    module2: moduleCustom2.modCode,
    information2: moduleCustom2,
    module3: moduleCustom3.modCode,
    information3: moduleCustom3,
    module4: moduleCustom4.modCode,
    information4: moduleCustom4,
    module5: moduleCustom5.modCode,
    information5: moduleCustom5,
    number: 5,
  });

  // console.log(customisedModuleSetFive); //manipulate data
  extractInformation(customisedModuleSetFive);
  
  try {
    await customisedModuleSetFive.save();
  } catch (err) {
    const error = new HttpError(
      "Creating customised Module Set failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ customModule: customisedModuleSetFive });
};

//--------------------------------------------------------------------------

const createModuleSetSix = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { module1, module2, module3, module4, module5, module6 } = req.body;

  let moduleInformation1;
  try {
    moduleInformation1 = await getInfoForModuleCode(module1.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation2;
  try {
    moduleInformation2 = await getInfoForModuleCode(module2.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation3;
  try {
    moduleInformation3 = await getInfoForModuleCode(module3.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation4;
  try {
    moduleInformation4 = await getInfoForModuleCode(module4.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation5;
  try {
    moduleInformation5 = await getInfoForModuleCode(module5.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation6;
  try {
    moduleInformation6 = await getInfoForModuleCode(module6.toUpperCase());
  } catch (error) {
    return next(error);
  }

  const createdModuleSetSix = new ModuleSetSix({
    module1: module1.toUpperCase(),
    information1: moduleInformation1,
    module2: module2.toUpperCase(),
    information2: moduleInformation2,
    module3: module3.toUpperCase(),
    information3: moduleInformation3,
    module4: module4.toUpperCase(),
    information4: moduleInformation4,
    module5: module5.toUpperCase(),
    information5: moduleInformation5,
    module6: module6.toUpperCase(),
    information6: moduleInformation6,
    number: 6,
  });

  try {
    await createdModuleSetSix.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Module Set failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ module: createdModuleSetSix });
};

//--------------------------------------------------------------------------

const customiseModuleSetSix = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    mod1Array,
    mod2Array,
    mod3Array,
    mod4Array,
    mod5Array,
    mod6Array,
  } = req.body;

  let moduleCustom1;
  try {
    moduleCustom1 = await preferredSlot(mod1Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom2;
  try {
    moduleCustom2 = await preferredSlot(mod2Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom3;
  try {
    moduleCustom3 = await preferredSlot(mod3Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom4;
  try {
    moduleCustom4 = await preferredSlot(mod4Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom5;
  try {
    moduleCustom5 = await preferredSlot(mod5Array);
  } catch (error) {
    return next(error);
  }

  let moduleCustom6;
  try {
    moduleCustom6 = await preferredSlot(mod6Array);
  } catch (error) {
    return next(error);
  }

  const customisedModuleSetSix = new CustomModuleSetSix({
    module1: moduleCustom1.modCode,
    information1: moduleCustom1,
    module2: moduleCustom2.modCode,
    information2: moduleCustom2,
    module3: moduleCustom3.modCode,
    information3: moduleCustom3,
    module4: moduleCustom4.modCode,
    information4: moduleCustom4,
    module5: moduleCustom5.modCode,
    information5: moduleCustom5,
    module6: moduleCustom6.modCode,
    information6: moduleCustom6,
    number: 6,
  });

  // console.log(customisedModuleSetSix); //manipulate data
  // extractInformation(customisedModuleSetSix);
  try {
    await customisedModuleSetSix.save();
  } catch (err) {
    const error = new HttpError(
      "Creating customised Module Set failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ customModule: customisedModuleSetSix });
};

//--------------------------------------------------------------------------

const createModuleSetSeven = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
  } = req.body;

  let moduleInformation1;
  try {
    moduleInformation1 = await getInfoForModuleCode(module1.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation2;
  try {
    moduleInformation2 = await getInfoForModuleCode(module2.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation3;
  try {
    moduleInformation3 = await getInfoForModuleCode(module3.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation4;
  try {
    moduleInformation4 = await getInfoForModuleCode(module4.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation5;
  try {
    moduleInformation5 = await getInfoForModuleCode(module5.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation6;
  try {
    moduleInformation6 = await getInfoForModuleCode(module6.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation7;
  try {
    moduleInformation7 = await getInfoForModuleCode(module7.toUpperCase());
  } catch (error) {
    return next(error);
  }

  const createdModuleSetSeven = new ModuleSetSeven({
    module1: module1.toUpperCase(),
    information1: moduleInformation1,
    module2: module2.toUpperCase(),
    information2: moduleInformation2,
    module3: module3.toUpperCase(),
    information3: moduleInformation3,
    module4: module4.toUpperCase(),
    information4: moduleInformation4,
    module5: module5.toUpperCase(),
    information5: moduleInformation5,
    module6: module6.toUpperCase(),
    information6: moduleInformation6,
    module7: module7.toUpperCase(),
    information7: moduleInformation7,
    number: 7,
  });

  try {
    await createdModuleSetSeven.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Module Set failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ module: createdModuleSetSeven });
};

//--------------------------------------------------------------------------

const createModuleSetEight = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
  } = req.body;

  let moduleInformation1;
  try {
    moduleInformation1 = await getInfoForModuleCode(module1.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation2;
  try {
    moduleInformation2 = await getInfoForModuleCode(module2.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation3;
  try {
    moduleInformation3 = await getInfoForModuleCode(module3.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation4;
  try {
    moduleInformation4 = await getInfoForModuleCode(module4.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation5;
  try {
    moduleInformation5 = await getInfoForModuleCode(module5.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation6;
  try {
    moduleInformation6 = await getInfoForModuleCode(module6.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation7;
  try {
    moduleInformation7 = await getInfoForModuleCode(module7.toUpperCase());
  } catch (error) {
    return next(error);
  }

  let moduleInformation8;
  try {
    moduleInformation8 = await getInfoForModuleCode(module8.toUpperCase());
  } catch (error) {
    return next(error);
  }

  const createdModuleSetEight = new ModuleSetEight({
    module1: module1.toUpperCase(),
    information1: moduleInformation1,
    module2: module2.toUpperCase(),
    information2: moduleInformation2,
    module3: module3.toUpperCase(),
    information3: moduleInformation3,
    module4: module4.toUpperCase(),
    information4: moduleInformation4,
    module5: module5.toUpperCase(),
    information5: moduleInformation5,
    module6: module6.toUpperCase(),
    information6: moduleInformation6,
    module7: module7.toUpperCase(),
    information7: moduleInformation7,
    module8: module8.toUpperCase(),
    information8: moduleInformation8,
    number: 8,
  });

  try {
    await createdModuleSetEight.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Module Set failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ module: createdModuleSetEight });
};

exports.getInputModulesbyId = getInputModulesbyId;
exports.getTimetableInfobyId = getTimetableInfobyId;
exports.createModuleSetFive = createModuleSetFive;
exports.customiseModuleSetFive = customiseModuleSetFive;
exports.createModuleSetSix = createModuleSetSix;
exports.customiseModuleSetSix = customiseModuleSetSix;
exports.createModuleSetSeven = createModuleSetSeven;
exports.createModuleSetEight = createModuleSetEight;
