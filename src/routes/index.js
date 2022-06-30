const express = require("express");
const views = require("./view");

const router = express.Router();

router.use("/", views);

module.exports = router;
