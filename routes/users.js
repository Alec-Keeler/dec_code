// Task 21a
const express = require('express');
const router = express.Router();
const { User, Post } = require('../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const bcrypt = require('bcryptjs');

// Task 18
// Task 20a
router.get('/', async (req, res) => {
    // console.log(req)
    // res.send('Hello from Breaddit')
    // Task 20a
    const users = await User.findAll()
    console.log(req.session)
    // Task 19c
    res.render('index', { header: 'Welcome to Breaddit!', users, title: 'Breaddit Users' })
})

// Task 20c
// GET /users/1
router.get('/:id(\\d+)', async (req, res) => {
    console.log(req.params)
    const user = await User.findByPk(req.params.id)
    res.render('index', { header: 'Profile Page', users: [user] })
})

// Task 32a
router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', {csrfToken: req.csrfToken(), errors: [], user: {}})
})

const signUpValidator = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const emailReg = /^[^\s@]+@\w+\.[A-z]{2,3}$/
    req.errors = [];

    if (name.length < 2) {
        req.errors.push('Please provide a longer name')
    }
    if (!emailReg.test(email)) {
        req.errors.push('Please provide a valid email')
    }
    if (!(password === confirmPassword)) {
        req.errors.push('Please make sure to type the same password both times!')
    }

    next()
}
// Task 32c ^^vv
router.post('/signup', csrfProtection, signUpValidator, async(req, res) => {
    const { name, faveBread, email, password } = req.body
    if (req.errors.length > 0) {
        res.render('signup', { csrfToken: req.csrfToken(), 
            errors: req.errors,
            user: req.body,
            // user: {
            //     name,
            //     faveBread,
            //     email
            // },
         })
    } else {
        //Perform password hashing before creating the user
        // Task 34a
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, faveBread, email, hashedPassword
        })
        req.session.user = { userId: user.id, username: user.name }
        res.redirect('/users')
    }
})

// Task 33a
router.get('/login', csrfProtection, (req, res) => {
    res.render('login', {csrfToken: req.csrfToken(), errors: [], user: {}})
})

// Task 33c
router.post('/login', csrfProtection, async(req, res) => {
    const { email, password } = req.body
    req.errors = []
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        //Fill out with password hashing
        // Task 34b
        const isPass = await bcrypt.compare(password, user.hashedPassword)
        if (isPass) {
            req.session.user = {userId: user.id, username: user.name}
            res.redirect('/users')
        } else {
            req.errors.push('Account validation failed.  Please Try again.')
            res.render('login', { csrfToken: req.csrfToken(), errors: req.errors, user: { email } })
        }
    } else {
        req.errors.push('Account validation failed.  Please Try again.')
        res.render('login', { csrfToken: req.csrfToken(), errors: req.errors, user: {email}})
    }
})

// Task 35c
router.get('/logout', (req, res) => {
    delete req.session.user
    // res.redirect('/users')
    // Task 35d
    req.session.save(() => {
        res.redirect('/users')
    })
})

module.exports = router;