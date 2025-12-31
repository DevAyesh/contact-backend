const { constants } = require("../constants.js");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.jason({ 
        title: "Validation failed" ,
        message: err.message, 
        stackTrace: err.stack  
        });
        break;
    case constants.NOT_FOUND:
        res.jason({ 
            title: "Not Found" , 
            message: err.message, 
            stackTrace: err.stack  
        });
    case constants.UNAUTHORIZED:
        res.jason({ 
            title: "Unauthorized" , 
            message: err.message, 
            stackTrace: err.stack  
        });
    case constants.FORBIDDEN:
        res.jason({ 
            title: "Forbidden" , 
            message: err.message, 
            stackTrace: err.stack  
        });
    case constants.SERVER_ERROR:
        res.jason({ 
            title: "Server Error" , 
            message: err.message, 
            stackTrace: err.stack  
        });    
    default:
        console.log("No error, all good!");
        break;
  }
  
};

module.exports = errorHandler;