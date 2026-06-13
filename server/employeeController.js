const employeeSchema = require("../models/employeeModel");

const getEmployees = (req, res) => {
  res.send("Employee list endpoint");
};

module.exports = {
  getEmployees
};