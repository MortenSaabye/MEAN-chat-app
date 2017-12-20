const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: String,
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    versionKey: false
})
module.exports =  mongoose.model('Message', messageSchema)