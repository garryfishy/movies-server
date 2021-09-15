const Movies = require("../models/movies");

class MoviesController {
  static async getMovies(req, res, next) {
    Movies.find()
      .then((response) => {
        console.log("ni controller");
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static createMovies(req, res, next) {
    const data = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: Number(req.body.popularity),
      tags: req.body.tags,
    };

    Movies.create(data)
      .then((response) => {
        res.status(200).json(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updateMovies(req, res, next) {
    const updateData = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: Number(req.body.popularity),
      tags: req.body.tags,
    };
    Movies.update(req.params.id, updateData).then((response) => {
      res.json(response);
      console.log(response);
    });
  }

  static deleteMovies(req, res, next) {
    Movies.remove(req.params.id).then((response) => {
      res.json(response);
      console.log(response);
    });
  }
}

module.exports = MoviesController;
