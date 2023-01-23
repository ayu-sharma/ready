const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellerSchema = new Schema({
    owner_name:{
        type: String,
        required: true
    },
    store_name:{
        type: String,
        required: true
    },
    gstin:{
        type: String,
        required: true,
        unique: true
    },
    upiId:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
});

module.exports = mongoose.model('seller', sellerSchema)