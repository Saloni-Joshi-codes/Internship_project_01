const employees = require("./Data/employees");

const getEmployees = (req, res) => {
  res.json(employees);
};

module.exports = {
  getEmployees
};