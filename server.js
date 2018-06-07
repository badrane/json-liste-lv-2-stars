const express = require('express');
const server = express();

server.use('/static', express.static('public'));

server.get('/', function(req, res){
    res.sendFile(__dirname + "/front/index.html")
})

server.get('/script', function(req, res){
    res.sendFile(__dirname + "/public/script.js")
})

server.get('/liste', function(req, res){
    res.sendFile(__dirname + "/competence.json")
})

server.listen(3007, function() { 
    console.log('Listening on port 3007')
})
