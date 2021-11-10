const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
    estado:{
        type: String,
        default: 'Funcionando',
        enum: ['Funcionando', 'Parado', 'Mantenimiento']
    },
    capacidad:{
        type: Number,
       required: [true,'vehiculo.cant.required']
    }, 
    marca:{
        type:String,
    },
    chapa: String,
    consumo: Number,
    combustible:{
        type: Types.ObjectId, ref: 'Combustible',
       required: [true,'vehiculo.department.required']
    },
    asignacion:[
        {
            fecha:Date,
            cant: Number
        }
    ],
    comb_actual:{
        type: Number,
        default:0
    },
    kms: Number
    
});


module.exports =  model('Vehiculo',dataSchema);