const express = require('express');
const router = express.Router();
const { Post, Subbreaddit } = require('../db/models');
// Task 28b
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true})

const authCheck = require('./utils');

// Task 32b
const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// Task 27b
router.use((req, res, next) => {
    req.potato = false
    next()
})
// Task 27c
const errorArr = (req, res, next) => {
    req.errors = []
    next()
}

const titleCheck = async(req, res, next) => {
    const title = req.body.title
    const post = await Post.findOne({
        where: {
            title
        }
    })
    if (post) {
        req.errors.push('Title already exists')
        next()
    } else {
        next()
    }
    
}

// Task 37
router.get('/', async(req, res) => {
    const posts = await Post.findAll();
    let activeUser;
    if (req.session.user) {
        activeUser = req.session.user.userId
    }
    res.render('posts', {posts, activeUser})
})

// Task 26a
router.get('/new', csrfProtection, authCheck, async(req, res, next) => {
    const subs = await Subbreaddit.findAll()
    // console.log('Is banana?', req.banana)
    // console.log('Is potato?', req.potato)
    // const err = new Error('Something crazy happened')
    // next(err)
    console.log(req.session)
    res.render('create-post', {title: 'Breaddit - Create Post', subs, errors: [], csrfToken: req.csrfToken()})
})

// Task 26c
router.post('/', [errorArr, titleCheck], csrfProtection, asyncHandler(async(req, res, next) => {
    console.log(req.body)
    const { title, content, subId, imgLink } = req.body;
    const userId = req.session.user.userId
    if (req.errors.length < 1) {
        // try {
            const post = await Post.create({
                title,
                content,
                userId,
                subId,
                imgLink
            })
            res.redirect('/users')
        // } catch (err) {
        //     next(err)
        // }
    } else {
        const subs = await Subbreaddit.findAll()
        res.render('create-post', { title: 'Breaddit - Create Post', subs, errors: req.errors, csrfToken: req.csrfToken() })
    }

}))

router.get('/:id(\\d+)', async(req, res) => {
    const post = await Post.findByPk(req.params.id)
    res.render('single-post', {post})
});

// Task 38
router.delete('/:id(\\d+)', async(req, res) => {
    console.log('you have arrived at the route handler')
    const post = await Post.findByPk(req.params.id)

    if (post) {
        await post.destroy();
        res.json({message: "Success"})
    } else {
        res.json({message: "Failure"})
    }
})


module.exports = router;