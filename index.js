// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

app.use("/", movieRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, function () {
  console.log(`Server up on port ${PORT}`);
});
