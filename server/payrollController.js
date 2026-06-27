const payrolls = require("./payrollModel");

const getPayrolls = (req, res) => {
    res.json(payrolls);
};

const createPayroll = (req, res) => {
    payrolls.push(req.body);
    res.status(201).json({
        message: "Payroll record created successfully",
        payroll: req.body
    });
}

const updatePayroll = (req, res) => {
    const {
        employeeId,
    } = req.params;

    const payroll = payrolls.find((p) => p && p.employeeId === employeeId);
    if (!payroll) {
        return res.status(404).json({
            message: "Payroll record not found"
        });
    }

    Object.assign(payroll, req.body);
    res.json({
        message: "Payroll record updated successfully",
        payroll
    });
};

module.exports = {
    getPayrolls,
    createPayroll,
    updatePayroll
};