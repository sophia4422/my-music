const express = require("express");
const artistRouter = require("./artist");

const router = express.Router();

router.use("/artist", artistRouter);

module.exports = router;
