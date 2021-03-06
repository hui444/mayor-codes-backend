const express = require("express");
const { check } = require("express-validator");

const createControllers = require("../controllers/create-controller");

const router = express.Router();

router.get("/results/:tid", createControllers.getTimetableInfobyId);

router.get("/:msid", createControllers.getInputModulesbyId);

router.post(
  "/five",
  [
    check("module1").not().isEmpty(),
    check("module2").not().isEmpty(),
    check("module3").not().isEmpty(),
    check("module4").not().isEmpty(),
    check("module5").not().isEmpty(),
  ],
  createControllers.createModuleSetFive
);

router.post("/fiveCustomised", createControllers.customiseModuleSetFive);

router.post(
  "/six",
  [
    check("module1").not().isEmpty(),
    check("module2").not().isEmpty(),
    check("module3").not().isEmpty(),
    check("module4").not().isEmpty(),
    check("module5").not().isEmpty(),
    check("module6").not().isEmpty(),
  ],
  createControllers.createModuleSetSix
);

router.post("/sixCustomised", createControllers.customiseModuleSetSix);

router.post(
  "/seven",
  [
    check("module1").not().isEmpty(),
    check("module2").not().isEmpty(),
    check("module3").not().isEmpty(),
    check("module4").not().isEmpty(),
    check("module5").not().isEmpty(),
    check("module6").not().isEmpty(),
    check("module7").not().isEmpty(),
  ],
  createControllers.createModuleSetSeven
);

router.post("/sevenCustomised", createControllers.customiseModuleSetSeven);

router.post(
  "/eight",
  [
    check("module1").not().isEmpty(),
    check("module2").not().isEmpty(),
    check("module3").not().isEmpty(),
    check("module4").not().isEmpty(),
    check("module5").not().isEmpty(),
    check("module6").not().isEmpty(),
    check("module7").not().isEmpty(),
    check("module8").not().isEmpty(),
  ],
  createControllers.createModuleSetEight
);

router.post("/eightCustomised", createControllers.customiseModuleSetEight);

module.exports = router;
