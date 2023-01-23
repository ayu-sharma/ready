const User = require('../models/userModel')

//LOGIN USER
const loginUser = async (req, res) => {
    res.json({msg: 'Login User'})
}

//SIGNUP USER
const signupUser = async (req, res) => {
    const {name, email, password} = req.body

    try{
        const user = await User.signup(name, email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({msg: 'Signup User'})
}

module.exports = { signupUser, loginUser}