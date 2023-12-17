const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')
// app.use(logger)

// app.get('/', logger, logger, logger, (req, res) => {
//     console.log('Console log in app.get /')
//     // res.json({message: "Some json message"})
//     // res.download('server.js')
//     res.render('index', { text: 'World'})
// })



const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
