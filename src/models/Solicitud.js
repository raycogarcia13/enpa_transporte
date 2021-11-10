const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
    fecha_solicitud:{
        type: Date,
        default:Date.now()
    },
    fecha_viaje:{
        type: Date,
        required: [true,'solicitud.fecha.required']
    },
    estado:{
        type: String,
        default: 'Solicitado',
        enum: ['Solicitado', 'Aceptado', 'Denegado']
    },
    cant_personas:{
        type: Number,
       required: [true,'solicitud.cant.required']
    },
    departamento:{
       type: Types.ObjectId, ref: 'Departamento',
       required: [true,'solicitud.department.required']
    }
    descripcion:{
       type: String
       required: [true,'solicitud.description.required']
    }
    correo:{
       type: String
       required: [true,'solicitud.email.required']
    },
    geometry: {
        type: { type: String },
        coodinates: []
    }
});


module.exports =  model('Solicitud',dataSchema);