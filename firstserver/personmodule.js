const mongoose = require('mongoose');
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
     
     return person
  }