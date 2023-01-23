const express = require('express')
const router = express.Router()
const { signupUser, loginUser } = require('../controllers/userController')

// const user = require('../models/user')
// const {body, validationResult} = require('express-validator')


//LOGIN ROUTE

router.post('/login', loginUser)

//SIGNUP ROUTE
router.post('/signup', signupUser)

module.exports = router









// router.get('/auth/addnewuser', [
//     body('name', 'Name must have atleast 3 characters').isLength({min:3}),
//     body('email', 'Enter a vaild Email').isEmail(),
//     body('password', 'Email must have atleast 8 characters').isLength({min:8}),
// ], async (req, res)=> {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     let new_user = await user.findOne({email: req.body.email})
//     if (new_user){
//       return res.status(400).json({error: "A user with this email already exists"})
//     }
//     new_user = await user.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     })

//     res.json({"User": "added"})
// })