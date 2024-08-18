const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes'); // Correct import

// Log StatusCodes to verify it's imported correctly
// console.log(StatusCodes);

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    
    return res.status(err.statusCode).json({ msg: err.message });
  }

  // For unknown errors, default to INTERNAL_SERVER_ERROR
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong, try again later');
};

module.exports = errorHandlerMiddleware;
