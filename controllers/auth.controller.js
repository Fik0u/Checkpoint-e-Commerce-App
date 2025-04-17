const User = require('../model/User');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        const foundUser = await User.findOne({ email });
        if (foundUser){
            return res.status(400).json({errors : [{msg : 'User already exists'}]});
        }
    
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ name, email, password: hashPassword, phone });

        await newUser.save();

    // Token
    const token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY, {expiresIn : '24h'});

        res.status(200).json({success : [{msg : 'User registered successfully'}], user : newUser, token});

    } catch (error) {
        res.status(400).json({errors : [{msg : 'Registration failed'}], error});
    }
}

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email })
        if (!foundUser){
            return res.status(400).json({errors : [{msg : 'Invalid credentials'}]});
        }
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch){
            return res.status(400).json({errors : [{msg : 'Invalid credentials'}]});
        }
        // Token
        const token = jwt.sign({id: foundUser._id}, process.env.SECRET_KEY, {expiresIn : '24h'});

        res.status(200).json({success : [{msg : 'User logged in successfully'}], user : foundUser, token});
    } catch (error) {
        res.status(400).json({errors : [{msg : 'Login failed'}], error});
    }
}