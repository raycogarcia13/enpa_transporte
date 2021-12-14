const Departamento = require('../models/Departamento');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

exports.department = catchAsyncErrors(async (req,res,next) =>{

    const all = await Departamento.find();

    return res.json({
        status:"success",
        data:all
    })
})
