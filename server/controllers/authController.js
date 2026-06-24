const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const token = jwt.sign(
        {
            email: email,
            role: "HR"
        },
        "secretkey",
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login successful",
        token
    });
};

module.exports = {
    login
};