const express = require('express')
const hbs = require('express-handlebars')

const fs = require('fs')
const path = require('path')

const server = express()

module.exports = server

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Home page
server.get('/', (req, res) => {
  fs.readFile(path.resolve('./data.json'), 'utf-8', (err, data) => {
    const images = JSON.parse(data)
    res.render('home', images)
  })
})
