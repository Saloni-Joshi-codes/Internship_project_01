const express = require("express");
const router = express.Router();

const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeesByDepartment,
  getEmployeesBySalary
} = require("./employeeController");

router.get("/", getAllEmployees);
router.get("/search", getEmployeesByDepartment);
router.get("/salary", getEmployeesBySalary);
router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
module.exports = router;