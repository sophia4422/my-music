const express = require("express");
const {
  renderHomePage,
  renderArtistsPage,
  renderArtistPage,
} = require("../controllers/view");

const router = express.Router();

router.get("/", renderHomePage);
router.get("/artists", renderArtistsPage);
router.get("/artists/:id", renderArtistPage);

module.exports = router;
