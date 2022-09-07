const express = require('express')
const server = express()
const fs = require('fs')
server.use(express.static('public'))
server.use(express.urlencoded())
server.listen(3000, () => {
    console.log('connected to webb');
})

server.post('/add', (req, res) => {
    fs.writeFileSync('yep.json', JSON.stringify(req.body));

    res.send("yep")
})

server.post('/login', (req, res) => {

    let user = JSON.parse(fs.readFileSync('yep.json', 'utf8'));

    if (user.password == req.body.password) {
        res.sendFile(__dirname + "/public/home.html")
    }
    else {
        res.send("something is Wrong!");
    }
})