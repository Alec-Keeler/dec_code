const express = require('express');
const { User } = require('./db/models');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const cookieParser = require('cookie-parser');
// Task 17a
const app = express();
// Task 19a
app.set('view engine', 'pug');

// Task 23
// app.use(express.static('./public'))
const path = require('path')
app.use(express.static(path.join(__dirname, './public')))

// Task 27a
app.use((req, res, next) => {
    req.banana = true
    next()
})

// Task 28a
app.use(express.urlencoded({extended: false}))
// Task 28b
app.use(cookieParser())

// Task 21b
app.use('/users', usersRouter)
// app.use('/banana', usersRouter)
app.use('/posts', postsRouter)


// // Task 18
// // Task 20a
// app.get('/users', async(req, res) => {
//     // console.log(req)
//     // res.send('Hello from Breaddit')
//     // Task 20a
//     const users = await User.findAll()
//     // Task 19c
//     res.render('index', {header: 'Welcome to Breaddit!', users})
// })

// // Task 20c
// // GET /users/1
// app.get('/users/:id', async(req, res) => {
//     console.log(req.params)
//     const user = await User.findByPk(req.params.id)
//     res.render('index', {header: 'Profile Page', users: [user]})
// })

// Task 22b
app.get(/^\/star[(wars)(trek)]?/, (req, res) => {
    res.send('This is a star wars or star trek page')
})

// Task 22a
// app.all('*', (req, res) => {
//     res.send('This is a custom 404 message')
// })

// Task 31a
app.use((req, res, next) => {
    console.log('404 handler')
    const err = new Error('Page not found')
    next(err)
})

app.use((req, res, next) => {
    console.log('errors should not be here')
})

// Task 31b
app.use((err, req, res, next) => {
    console.log('this is our error handler')
})

// Task 22c (regex tests)
// --pass
// /users, /about, /foo, /about-foo, /about_foo
// --fail
// /users/1, /about/foo, /anything/anythingelse

// Task 17b
// const port = 8080;
// app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;