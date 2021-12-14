const asyncForEach = require('./asyncForEach');
// funciones seeders
const seedDepartmens = async ()=>{
    console.log('running departemnts seeder')
    try{
        const Departamento = require("../models/Departamento");
        const datas = require('../data/departments');
        await Departamento.deleteMany();
        await Departamento.insertMany(datas);
        return true;
    }catch(error){
        console.log('error',error);
        return false;
    }
}

// seeders activos
const seeders =[
    seedDepartmens
]

// run all seeders
exports.init = async()=>{
    let status = true; 
    await asyncForEach(seeders,async(item)=>{
            let st = await item();
            if(!st) status =false
    })
    return status;
}
