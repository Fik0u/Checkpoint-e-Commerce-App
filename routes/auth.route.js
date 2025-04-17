const express = require('express')
const { register, login } = require('../controllers/auth.controller')
const { registerValidation, validate, loginValidation } = require('../middleware/validator')
const isAuth = require('../middleware/isAuth')


const router = express.Router()

//Test route
router.get('/test', (req, res) => {
    res.json('This is a test route')
})

// Register route
router.post('/register', registerValidation(), validate, register);

// Login route
router.post('/login', loginValidation(), validate, login);

// Current user route
router.get('/current', isAuth, (req, res) => {
    res.json(req.user);
});


module.exports = router;