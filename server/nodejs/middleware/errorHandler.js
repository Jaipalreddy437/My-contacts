const { constants } = require("../constants");

const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORISED:
      res.json({
        title: "Un Authorised",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      case constants.SERVER_ERROR:
        res.json({
            title: 'Server Error',
            message: err.message,
            stackTrace: err.stack
        })
    default:
        console.log("No Error All Good!");
      break;
  }
  //res.json({ message: err.message, stackTrace: err.stack });
};

module.exports = errorhandler;
