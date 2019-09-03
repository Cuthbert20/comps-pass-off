const express = require('express')
const app = express()
require('dotenv').config()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller.js')

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

//endpoints
app.get('/api/movies/:id', ctrl.movie)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now up and listening`))

}).catch(err => console.log(err, 'nott hitting db stu'))