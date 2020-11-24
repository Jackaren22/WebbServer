const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel')
const app = express()
const port = 3000

const nameList = ["",""]

const clientDir = __dirname + "\\client\\" //Förkortning så man slipper skriva ut den exakta mappen man är i

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.get('/', (req, res) => res.sendFile(clientDir + "index2.html")) // Hur man skickar en fil till användaren av sidan

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

    let person = personModel.createPerson(req.body.username, req.body.email) // Här körs PersonModel och en person med username och email skapas
  
    dBModule.storeElement(person) // Här körs dBModule och infromationen sparar i databasen
  
    res.render('pages/index.ejs', {name: req.body.username, nameList: nameList}) // Redirectar till en annan sida, i detta fall refreshar den sidan
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on ports ${port}!`)
  }) 