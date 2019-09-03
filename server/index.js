const express = require('express')
const app = express()
require('dotenv').config()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller.js')
const router = express.Router()

//top level middlewear
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
//middleware has access to the request obj, response obj,
//and a function called next in the applications request-response cycle.
//middeware funcs can perform the following tasks:
//execute any code
//make changes to the req and res objs
//end the request-response cycle
//call the next middleware in the stack
//types 
//app level middleware
//router level middleware
//error-handling middleware, error-handling middleware takes in 4 arguments you must provied four arguments

let myMovie = (req,res,next) => {
    console.log('Movies are cool')
    next()
}
let getTime = (req,res,next) => {
    req.getTime = Date.now()
    next()
}
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('its broken')
  })
// app.use(getTime)
app.use(myMovie)
app.use("/static", express.static("./media"))
app.use( express.static( `${__dirname}/../build` ) );

//router level middleware
// router.use(req,res,next){
//     console.log("time:", new Date())
//     next()
// }

//endpoints
app.post('/auth/login', getTime, ctrl.login)
app.get('/api/movies', ctrl.movie)
router.get("api/movies")
// app.get()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now up and listening`))

}).catch(err => console.log(err, 'nott hitting db stu'))