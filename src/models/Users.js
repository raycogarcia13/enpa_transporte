const { Schema, model, Types } = require("mongoose");
const validator = require("validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const dataSchema = new Schema({
    username:{
        type: String,
        required: [true, 'user.name.required'],
    },
    email:{
        type: String,
        required: [true, 'user.email.required'],
        unique: true,
        validate: [validator.isEmail, 'user.email.invalid']
    },
    password:{
        type: String,
        required: [true, 'user.password.required'],
        minLength: [6 , 'user.password.lenght'],
        select: false
    },
    rol:{
        type: String,
        default: 'Usuario',
        enum: ['Usuario', 'Administrador']
    }
});

dataSchema.pre('save', async function(next){
    if(!this.isModified('password'))
        next()
    
    this.password = await bcrypt.hash(this.password, 10)
 });

//  compare password
dataSchema.methods.comparePassword = async function (enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password)
};

//  return JWT
dataSchema.methods.getJwtToken = function (){
    return jwt.sign({
        id:this._id
    },process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESTIME
    });
};

module.exports =  model('User',dataSchema);