const { moviesData } = require('../dump');

exports.getMovies = (req, res) => {
  if (!req.headers.key) {
    return res.status(404).send('unauthorized');
  }
  res.status(200).send({ data: moviesData, success: true });
};
