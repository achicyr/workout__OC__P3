const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    liked: { type: Array, required: true },
    
})
module.exports = mongoose.model('User', UserSchema)
