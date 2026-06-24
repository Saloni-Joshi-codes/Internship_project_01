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

const { verifyToken, authorizeRole } = require("./middleware/authMiddleware");

router.get("/", verifyToken, getAllEmployees);
router.get("/search", verifyToken, getEmployeesByDepartment);
router.get("/salary", verifyToken, getEmployeesBySalary);
router.get("/:id", verifyToken, getEmployeeById);
router.post("/", verifyToken, createEmployee);
router.put("/:id", verifyToken, updateEmployee);
router.delete(
  "/:id",
  verifyToken,
  authorizeRole("HR"),
  deleteEmployee
);

module.exports = router;