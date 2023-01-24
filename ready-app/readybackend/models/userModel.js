const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
});

//STATIC SIGNUP METHOD
userSchema.statics.signup = async function(name, email, password) {

    //VALIDATION
    if(!name || !email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({ email })
    if(exists){
        throw Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})

    return user
}

//STATIC LOGIN METHOD
userSchema.statics.login = async function(email, password){

    //VALIDATION
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if(!user){
        throw Error("Incorrect email")
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error("Incorrect password")
    }

    return user
}

module.exports = mongoose.model('User', userSchema)