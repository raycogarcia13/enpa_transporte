const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
    tipo: { type: String, required: true },
});

module.exports =  model('Combustible',dataSchema);