const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Access denied, no token provided"
        });
    }

    try {
        const verified = jwt.verify(token, "secretkey");
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({
            message: "Invalid token"
        });
    }
};

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({
                message: "Access denied"
            });
        }
        next();
    };
};

module.exports = {
    verifyToken,
    authorizeRole
};