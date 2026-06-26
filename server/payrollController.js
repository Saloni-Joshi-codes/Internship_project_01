const payrolls = require("./payrollModel");

const getPayrolls = (req, res) => {
    res.json(payrolls);
};

const createPayroll = (req, res) => {
    payrolls.push(req.body);
    res.status(201).json({
        message: "Payroll record created successfully"
    });
};

module.exports = {
    getPayrolls,
    createPayroll
};