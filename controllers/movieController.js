// controllers/movieController.js
const request = require("request");
const host = "http://www.omdbapi.com/?apikey=thewdb&";

function get_request_results_page(qs, res) {
  const url = host + qs;

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let data = JSON.parse(body);
      data = data || {};
      res.json(data);
    } else {
      res.json("error");
    }
  });
}

function get_request_movie_page(qs, res) {
  const url = host + qs;

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let data = JSON.parse(body);
      data = data || {};
      res.json(data);
    } else {
      res.json("error");
    }
  });
}

module.exports = {
  getMovies: (req, res) => {
    const searchItem = req.query.search;
    if (searchItem) {
      const qs = "s=" + searchItem;
      get_request_results_page(qs, res);
    } else {
      res.json("Show search Page");
    }
  },
  getMovieById: (req, res) => {
    const searchId = req.params.searchId;
    const qs = "i=" + searchId;
    get_request_movie_page(qs, res);
  }
};
