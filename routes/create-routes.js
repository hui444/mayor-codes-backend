const express = require("express");
const { check } = require("express-validator");

const createControllers = require("../controllers/create-controller");

const router = express.Router();

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

module.exports = router;
