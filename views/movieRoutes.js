// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getMovies);
router.get("/movies", movieController.getMovies);
router.get("/movie/:searchId", movieController.getMovieById);

module.exports = router;
