//Import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

const server = express();

//Using static files
server.use(express.static('public'))

//Configuring template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//New route
server.get('/', pages.index)

server.get('/orphanage', pages.orphanage)

server.get('/orphanages', pages.orphanages)

server.get('/create-orphanage', pages.createOrphanage)









// Turn on the server
server.listen(5500)