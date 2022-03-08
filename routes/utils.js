
// Task 36
const authCheck = (req, res, next) => {
    if (req.session.user) {
        console.log('valid access')
        next()
    } else {
        console.log('invalid access')
        res.redirect('/users/login')
    }
}

module.exports = authCheck