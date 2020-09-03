const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + "index2.html"))

app.get('/cssen', (req, res) => {
    res.sendFile(clientDir + "story.css")
})

app.get('/mqueen', (req, res) => {
    res.sendFile(clientDir + "mqueen.png")
})

app.get('/ang', (req, res) => {
    res.sendFile(clientDir + "äng.jpg")
})

app.get('/pistol', (req, res) => {
    res.sendFile(clientDir + "pistol.png")
})

app.get('/hand', (req, res) => {
    res.sendFile(clientDir + "hand.png")
})

app.get('/lizard', (req, res) => {
    res.sendFile(clientDir + "lizarddance.mp4")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))