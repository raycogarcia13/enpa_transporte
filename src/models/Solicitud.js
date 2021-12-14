const { Schema, model, Types } = require("mongoose");

const lineSchema = new Schema({
    type: String,
    coordinates: [
        [
            [
                Number
            ]
        ]
    ]
});

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
        enum: ['Solicitado', 'Aceptado', 'Denegado', 'Pospuesto']
    },
    cant_personas:{
        type: Number,
       required: [true,'solicitud.cant.required']
    },
    departamento:{
       type: Types.ObjectId, ref: 'Departamento',
       required: [true,'solicitud.department.required']
    },
    descripcion:{
       type: String,
       required: [true,'solicitud.description.required']
    },
    correo:{
       type: String,
       required: [true,'solicitud.email.required']
    },
    nombre:{
       type: String,
       required: [true,'solicitud.nombre.required']
    },
    geometry:  [
        [
            [
                Number
            ]
        ]
    ]
});


module.exports =  model('Solicitud',dataSchema);