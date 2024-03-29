const createError = require('http-errors');

module.exports = () => (err, req, res, next) => {
  if (!(err instanceof createError.HttpError)) {
    err = createError(500, err.message);
  }

  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    name: err.name,
    message: err.message
  });
};