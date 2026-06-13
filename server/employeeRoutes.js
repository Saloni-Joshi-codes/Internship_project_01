const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Employee Route Working");
});

module.exports = router;