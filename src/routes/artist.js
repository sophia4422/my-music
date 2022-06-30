const express = require("express");
const { getArtistById, singleArtist } = require("../controllers/artist");

const router = express.Router();

router.get("/artists:id", getArtistById);
router.post("/", singleArtist);

module.exports = router;
