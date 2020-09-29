const express = require('express')
const dBModule = require('./dBModule')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

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

app.post('/', (req, res) => {

  dBModule.storePerson(req.body.username, req.body.email)
  res.redirect('/')
 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))