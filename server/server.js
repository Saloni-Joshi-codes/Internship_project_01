const express = require("express");
const employeeRoutes = require("./employeeRoutes");

const app = express();

app.get("/", (req, res) => {
    res.send("HRMS Backend Running");
});

app.use("/employees", employeeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});