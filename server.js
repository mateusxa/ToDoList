const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const TaskList = require('./TaskList')
const path = require('path')

const app = express()


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Set Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Navigation
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage'
    })
})


////////////////////////////////////////////////////////////////////////////
// API

// Get All members

// Get Single meember

//Create

//Remove

//Update

//Delete



// app.get('/about', (req, res) => {
//     res.render('about', {
//         //layout: './layouts/teste'
//     })
// })


// Set Port Listener
app.listen(5000, () => {
    console.log(`App running at http://localhost:5000`)
  })
