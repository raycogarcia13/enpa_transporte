const Solicitud = require('../models/Solicitud');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

//store  =>[POST]/api/v1/cards {type:id, value:string}
exports.store = catchAsyncErrors(async (req,res,next) =>{

    const newed = await Solicitud.create({
        fecha_viaje:req.body.fecha_viaje,
        cant_personas:req.body.cant_personas,
        departamento:req.body.departamento,
        descripcion:req.body.descripcion,
        correo:req.body.email,
        nombre:req.body.name,
        geometry:req.body.geometry
    });

    return res.json({
        status:"success",
        message:"solicitud.created",
        data:newed
    })
})

//get all => /api/v1/product?keyword=standard
exports.get = catchAsyncErrors(async (req,res,next) =>{
    // const all = await Solicitud.find({user:req.user._id})
    //         .populate({path:'contacts',populate:{path:'contact'}});
    // res.json({
    //     status:"success",
    //     count: all.length,
    //     data: all
    // })
})

// // get one product by id : /api/v1/diameter/:id 
exports.find = catchAsyncErrors( async (req,res,next) =>{
    // const data = await Card.findOne({_id:req.params.id})
    //         .populate({path:'contacts',populate:{path:'type'}});
    
    // if(!data){
    //     return next(new ErrorHandler('Data not found',404)) 
    // }

    // res.json({
    //     status:"success",
    //     data
    // })
})

// // update one product by id : /api/v1/diameter/:id 
exports.update = catchAsyncErrors(async (req,res,next) =>{
    // let data = await Card.findOne({_id:req.params.id,user:req.user._id});
    
    // if(!data){
    //     return next(new ErrorHandler('Data not found',404)) 
    // }
    
    // data = await Card.findByIdAndUpdate(req.params.id,req.body,{
    //     new:true,
    //     runValidators:true,
    //     useFindAndModify: false
    // });

    // res.json({
    //     status:"success",
    //     data
    // })
})
// // update one product by id : /api/v1/diameter/:id 
exports.add = catchAsyncErrors(async (req,res,next) =>{
    // let data = await Card.findOne({_id:req.params.id,user:req.user._id});
    
    // if(!data){
    //     return next(new ErrorHandler('Data not found',404)) 
    // }
    
    // const {contacts} = req.body;
    // contacts.forEach(item=>{
    //     data.contacts.push(item)
    // });

    // await data.save();

    // res.json({
    //     status:"success",
    //     data
    // })
})
// // update one product by id : /api/v1/diameter/:id 
exports.minus = catchAsyncErrors(async (req,res,next) =>{
    // let data = await Card.findOne({_id:req.params.id,user:req.user._id});
    
    // if(!data){
    //     return next(new ErrorHandler('Data not found',404)) 
    // }
    
    // const {contacts} = req.body;
    // contacts.forEach(item=>{
    //     data.contacts.pull( item )
    // });

    // await data.save();

    // res.json({
    //     status:"success",
    //     data
    // })
})

// // update one product by id : /api/v1/diameter/:id 
exports.remove = catchAsyncErrors(async (req,res,next) =>{
    // let data = await Card.findOne({_id:req.params.id,user:req.user._id});
    
    // if(!data){
    //     return next(new ErrorHandler('Data not found',404)) 
    // }
    
    // data = await Card.findByIdAndRemove(req.params.id).populate('type');

    // res.json({
    //     status:"success",
    //     data
    // })
})
