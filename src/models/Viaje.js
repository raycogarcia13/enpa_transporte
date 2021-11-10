const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
    vehiculo:{
        type: Types.ObjectId, ref: 'Combustible',
        required: [true,'vehiculo.department.required']
    },
    rutas:[
        {
            type: Types.ObjectId, ref: 'Solicitud',
            required: [true,'vehiculo.department.required']
        }
    ],
    fecha: Date
    
    
});


module.exports =  model('Vehiculo',dataSchema);