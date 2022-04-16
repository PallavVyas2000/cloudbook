const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchUser');
const JWT_Secret = "mysecretstring";

// Route 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('email', 'Enter a valid E-mail address').isEmail(),
    body('name', 'Minimum length of name should be 3 characters').isLength({ min: 3 }),
    body('password', 'Minimum length of password should be 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: "Invalid Details" });
    }
    // Check if a user with this email already exists
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            success = false;
            return res.status(400).json({ success, error: "A user with this email already exists." });
        }
        // Adding salt and creating hash of the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Creating user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Secret);
        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

// Route 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid E-mail address').isEmail(),
    body('password', 'Password cannot be blank.').exists()
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "User does not exist" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please login using valid credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Secret);
        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }

})

// Route 3: Get logged in user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchUser, async (req, res) => {
    // If there are errors, return Bad request and the errors
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})
module.exports = router;