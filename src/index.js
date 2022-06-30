const express = require("express");

const artistsRoutes = require("./routes/artists");
const homeRoute = require("./routes/view");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/artists", artistsRoutes);
app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`my-music app listening on http://localhost:${PORT}`);
});
