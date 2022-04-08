const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get All the Notes using: GET "/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

// ROUTE 2: Add a new note using: POST "/api/auth/addnote". Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid Title').isLength({ min: 1 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})
module.exports = router;