const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstserver', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String

  });

const Person = mongoose.model('Student', personSchema);

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

  console.log(req.body.username)
  console.log(req.body.email)
  res.redirect('/')
 

  const Person = mongoose.model('Info', personSchema);

  const user = new Person({name: (req.body.username), email: (req.body.email)})

  user.save()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))