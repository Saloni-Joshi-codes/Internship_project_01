const employees = require("./Data/employees");

const getEmployees = (req, res) => {
  res.json(employees);
};
const getEmployeeById = (req, res) => {
    const employee = employees.find(
        emp => emp.employeeId === req.params.id
    );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
};
module.exports = {
  getEmployees,
  getEmployeeById
};