const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('email', 'Enter a valid E-mail address').isEmail(),
    body('name', 'Minimum length of name should be 3 characters').isLength({ min: 3 }),
    body('password', 'Minimum length of password should be 5 characters').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error: 'User with this Email already exists.'})})
})

module.exports = router;