const ErrorHandler = require("../utils/errorHandler");

module.exports = (err ,req ,res ,next)=>{
    err.statusCode = err.statusCode || 500;

    let error = {...err}
    error.message = err.message
    
    // wrong mongoose object ID error
    if(err.name == 'CastError'){
        const message = `Resources not found. Invalid ${err.path}`
        error = new ErrorHandler(message, 400);  
    }
    //handliing mongoose validations
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(value=>value.message);
        error = new ErrorHandler(message,400);
    }
    res.status(error.statusCode).json({
        status:'failed',
        error:error.message || 'Internal Server Error',
        stack:err.stack
    })
// }
}