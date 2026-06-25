const payrolls = require("./payrollModel");

const getPayrolls = (req, res) => {
    res.json(payrolls);
};

module.exports = {
    getPayrolls
};