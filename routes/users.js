const express = require('express')
const router = express.Router()

router.use(userlogger)

router.get('/', (req, res) => {
    // res.send('User List', {users:users})
    // res.send(`Users array: ${users}`)
    res.render('users/index', {users: users})
})

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Default name"})
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } 
    else {
        console.log("Erro")
        res.render('users/new', {firstName: req.body.firstName})
    }
})

router.route('/:id')
.get((req, res) => {
    console.log(req.user)
    res.send(`Get User Get With ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update User Get With ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User Get With ID ${req.params.id}`)
})

const users = [
    {firstName:'kyle'},
    {firstName:'helward'},
    {firstName:'boffa'}
]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function userlogger(req, res, next) {
    console.log('userlogger', req.originalUrl)
    next()
}

module.exports = router