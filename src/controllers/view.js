const path = require("path");

const renderHomePage = (req, res) => {
  //render the html file
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile(filePath);
};

const renderArtistsPage = (req, res) => {
  //render the html file
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile(filePath);
};

const renderArtistPage = (req, res) => {
  //render the html file
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderArtistPage,
  renderArtistsPage,
};
