const {check, validationResult} = require('express-validator');

// Register validation
exports.registerValidation = () => [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
]

// Login validation
exports.loginValidation = () => [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
]

// Validate
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({errors : errors.array()});
}