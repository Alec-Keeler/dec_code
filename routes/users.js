// Task 21a
const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Task 18
// Task 20a
router.get('/', async (req, res) => {
    // console.log(req)
    // res.send('Hello from Breaddit')
    // Task 20a
    const users = await User.findAll()
    // Task 19c
    res.render('index', { header: 'Welcome to Breaddit!', users })
})

// Task 20c
// GET /users/1
router.get('/:id', async (req, res) => {
    console.log(req.params)
    const user = await User.findByPk(req.params.id)
    res.render('index', { header: 'Profile Page', users: [user] })
})

module.exports = router;