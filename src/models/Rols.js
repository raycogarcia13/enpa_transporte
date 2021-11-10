const { Schema, model, Types } = require("mongoose");

const rolSchema = new Schema({
    rol: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports =  model('Rol',rolSchema);