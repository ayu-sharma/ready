const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//CREATE TOKEN
const createToken = (_id) => {
    return jwt.sign({_id}, 'ready2134stores.in4321', {expiresIn: '3d'})
}

//LOGIN USER
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        //CREATE TOKEN
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//SIGNUP USER
const signupUser = async (req, res) => {
    const {name, email, password} = req.body

    try{
        const user = await User.signup(name, email, password)

        //CREATE TOKEN
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser}