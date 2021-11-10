const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'department.name.required']
    },
});


module.exports =  model('Departamento',dataSchema);