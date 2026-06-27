const express = require("express");
const router = express.Router();

const {
    getPayrolls,
    createPayroll,
    updatePayroll
} = require("./payrollController");

router.get("/", getPayrolls);
router.post("/", createPayroll);
router.put("/:employeeId", updatePayroll);

module.exports = router;