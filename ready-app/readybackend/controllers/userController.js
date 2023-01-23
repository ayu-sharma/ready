const User = require('../models/userModel')

//LOGIN USER
const loginUser = async (req, res) => {
    res.json({msg: 'Login User'})
}

//SIGNUP USER
const signupUser = async (req, res) => {
    res.json({msg: 'Signup User'})
}

module.exports = { signupUser, loginUser}