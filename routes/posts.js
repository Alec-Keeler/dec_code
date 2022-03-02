const express = require('express');
const router = express.Router();
const { Post, Subbreaddit } = require('../models');

// Task 27b
router.use((req, res, next) => {
    req.potato = false
    next()
})
// Task 27c
const titleCheck = (req, res, next) => {
    console.log('The post title is good')
    next()
}

// Task 26a
router.get('/', async(req, res) => {
    const subs = await Subbreaddit.findAll()
    console.log('Is banana?', req.banana)
    console.log('Is potato?', req.potato)
    res.render('create-post', {title: 'Breaddit - Create Post', subs})
})

// Task 26c
router.post('/', [titleCheck], async(req, res, next) => {
    console.log(req.body)
    const { title, content, subId, userId, imgLink } = req.body;

    const post = await Post.create({
        title,
        content,
        userId,
        subId,
        imgLink
    })

    res.redirect('/users')
})
module.exports = router;