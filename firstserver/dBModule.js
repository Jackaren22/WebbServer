const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstserver', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const personSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const Person = mongoose.model('Person', personSchema);

exports.storePerson = (username, email) => {
    var person = new Person({
        username: username, 
        email: email,  
       })
   
     person.save(()=>{
       console.log("Successfully saved person in database!")
     })
}