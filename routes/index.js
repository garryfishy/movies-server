const router = require("express").Router();
const MoviesController = require("../controllers/controller");

router.get("/movies", MoviesController.getMovies);
router.post("/movies", MoviesController.createMovies);
router.put("/movies/:id", MoviesController.updateMovies);
router.delete("/movies/:id", MoviesController.deleteMovies);

module.exports = router;
