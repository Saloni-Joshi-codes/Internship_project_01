const express = require("express");
const router = express.Router();

const {
    getEmployees,
    getEmployeeById,
    createEmployee
} = require("./employeeController");

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.post("/", createEmployee);

module.exports = router;