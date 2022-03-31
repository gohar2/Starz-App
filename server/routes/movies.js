module.exports = app => {
  const movies = require('../controllers/movies.controller.js');

  app.get('/movies', movies.getMovies);
};
