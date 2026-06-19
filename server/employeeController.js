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
const createEmployee = (req, res) => {
  const newEmployee = req.body;
  const { employeeId, fullName, department, salary } = req.body;

  if (!employeeId || !fullName || !department || !salary) {
    return res.status(400).json({
        message: "All fields are required"
    });
}
  employees.push(newEmployee);

  res.status(201).json({
    message: "Employee created successfully",
    employee: newEmployee
  });
};
const updateEmployee = (req, res) => {
    const employee = employees.find(
        emp => emp.employeeId === req.params.id
    );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    const { fullName, department, salary } = req.body || {};

    if (!fullName && !department && !salary) {
       return res.status(400).json({
       message: "At least one field is required for update"
      });
    }
    console.log(req.body);
    employee.fullName = req.body.fullName || employee.fullName;
    employee.department = req.body.department || employee.department;
    employee.salary = req.body.salary || employee.salary;

    res.json({
        message: "Employee updated successfully",
        employee
    });
};
const deleteEmployee = (req, res) => {
    const employeeIndex = employees.findIndex(
        emp => emp.employeeId === req.params.id
    );

    if (employeeIndex === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employees.splice(employeeIndex, 1);

    res.json({
        message: "Employee deleted successfully"
    });
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
const getAllEmployees = (req, res) => {
  res.json(employees);
};
module.exports = {
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees
};