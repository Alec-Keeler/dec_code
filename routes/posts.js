const express = require('express');
const router = express.Router();
const { Post, Subbreaddit } = require('../models');

// Task 26a
router.get('/', async(req, res) => {
    const subs = await Subbreaddit.findAll()

    res.render('create-post', {title: 'Breaddit - Create Post', subs})
})

// Task 26c
router.post('/', (req, res) => {
    console.log('You got to the post post route')
})
module.exports = router;