const Departamento = require('../models/Departamento');

exports.init = async (req,res,next) =>{
    const config = await Departamento.find();
    if(config.length>0){
        res.json({
            status:"failed",
            message:"Project is alredy config"
        })
    }
    else{
        const {init} = require("../utils/seeder");
        let status = await init();
        if(status){
            const data = {  key:"database", value:"true" }
            await Config.findOneAndUpdate({key:"database"},data,{
                new:true,
                upsert:true
            })
            res.json({
                status:"success",
                message:"Database filed!!!"
            })
        }else {
            res.status(500).json({
                status:"failed",
                message:"a error ocurred in process data, see a logs !!!"
            })
        }
    }
    
}
