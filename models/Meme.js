const
    mongoose = require('mongoose'),
    memeSchema = new mongoose.Schema({
        name: String,
        projectNum: Number,
        contact: String,
        profilePic: String
    }),
    Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme