const express = require("express");
const router = express.Router();

const { getPayrolls } = require("./payrollController");

router.get("/", getPayrolls);

module.exports = router;