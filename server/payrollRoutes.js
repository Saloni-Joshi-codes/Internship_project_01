const express = require("express");
const router = express.Router();

const {
    getPayrolls,
    createPayroll,
    updatePayroll,
    deletePayroll
} = require("./payrollController");

router.get("/", getPayrolls);
router.post("/", createPayroll);
router.put("/:employeeId", updatePayroll);
router.delete("/:employeeId", deletePayroll);
module.exports = router;