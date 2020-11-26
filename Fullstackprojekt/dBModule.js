
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstserver', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    
});


exports.storeElement = (element) => {   
  element.save(()=>{
    console.log("Successfully saved element in databasee!")
  })
     
}