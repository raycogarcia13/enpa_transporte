const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const ErrorHandler = require("../utils/errorHandler");
const jwt = require('jsonwebtoken')
const db = require('../config/database')
const User = db.models.User
// checks if authenticated
exports.isAuthenticatedUser = catchAsyncErrors( async (req,res,next) => {
    let { token } = req.cookies;

    
    if(!token){
        token = req.headers.authorization
        if(!token)
            return next(new ErrorHandler('access.denied.token',401))
        
        token = token.replace(/^Bearer\s/, '');
    }
     
     const decoded = jwt.verify(token,process.env.JWT_SECRET)
     if(decoded){
        req.user = await User.findOne({
            include:[
                {
                    model:db.models.Rol,
                    as: 'rol',
                    attributes:['id','rol'],
                },
                {
                    model:db.models.Permission,
                },
                {
                    model:db.models.Region,
                    as: 'region',
                    attributes:['id','name'],
                },
            ],
            where:{id:decoded.id}
        })
        next()
     }
    else
        return next(new ErrorHandler('access.denied.token',401))
})

// checks if role auth
exports.authorizeRole = (...roles) =>{
    return (req, res, next)=>{
    if(!roles.includes(req.user.rol.rol) && req.user.rol.rol != "system admin")
            return next(new ErrorHandler(`Role (${req.user.rol.rol}) is not alowed to access to this resource`,403))
        
        next();
    }
}