
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String, 
    message: String,
    
});
  
const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (name, message) => {
    var message = new Message({
        name: name, 
        message: message, 
        
       })

       return person
}
exports.getAllMessage = async () => {
    let message = await Message.find({})
    return message
}