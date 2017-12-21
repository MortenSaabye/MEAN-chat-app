const mongoose = require('mongoose')
const crypto = require('crypto')


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    salt: {
        type: String
    },
    currentMood: String
}, {
    versionKey: false
})

userSchema.pre('save', function (next) {
    if (this.password) {
       this.salt = new
          Buffer(crypto.randomBytes(32).toString('base64'), 'base64');
       this.password = this.hashPassword(this.password);
    }
    next();
 })
userSchema.methods.hashPassword = function (password) {
return crypto.pbkdf2Sync(password, this.salt, 10000,
    64, 'sha1').toString('base64');
}
userSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
}

module.exports =  mongoose.model('User', userSchema)


