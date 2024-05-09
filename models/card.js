const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/card`);

const cardSchema = mongoose.Schema({
    name:String,
    image:String,
    email:String
})

module.exports = mongoose.model('Card', cardSchema);