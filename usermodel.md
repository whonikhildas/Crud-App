const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/crud`)

const userSchema = mongoose.Schema({
    name:String,
    uername:String,
    email:String
})

module.exports = mongoose.model('user', userSchema);
