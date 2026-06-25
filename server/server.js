const express = require("express");
const employeeRoutes = require("./employeeRoutes");
const payrollRoutes = require("./payrollRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("HRMS Backend Running");
});

app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/auth", authRoutes);
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});