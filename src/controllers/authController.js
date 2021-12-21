const User = require('../models/Users');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

// Login user => /api/v1/login
exports.login =  catchAsyncErrors(async (req,res,next) =>{
    const {email, password} = req.body;

    if(!email || !password)
        return next(new ErrorHandler('auth.empty',400))

    let user = await User.findOne({username}).select('+password')

    if(!user)
        return next(new ErrorHandler('auth.error',401))
    
    const isPasswordMatch = await user.comparePassword(password)

    if(!isPasswordMatch)
        return next(new ErrorHandler('auth.error',401))

    if(user.status!='Available')
        return next(new ErrorHandler(`auth.status.${user.status}`,401))

    
    user = await User.findOne({username});
    sendToken(user, res);
})

// logout user => /api/v1/logout
exports.logout =  catchAsyncErrors(async (req,res,next) =>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });

    res.json({
        status:'success',
        message: 'logged.out'
    })
})

// getUsers => /api/v1/admin/users
exports.getUsers =  catchAsyncErrors(async (req,res,next) =>{

    let all = await User.find();
    res.json({
        status:"success",
        count: all.length,
        data: all
    })
})
