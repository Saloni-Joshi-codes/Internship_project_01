const express = require("express");
const router = express.Router();

const {
    getPayrolls,
    createPayroll
} = require("./payrollController");

router.get("/", getPayrolls);
router.post("/", createPayroll);

module.exports = router;