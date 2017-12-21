const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomname: String,
    about: String,
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {
    versionKey: false
})
module.exports =  mongoose.model('Room', roomSchema)