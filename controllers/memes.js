const Meme = require('../models/Meme')
module.exports = {
    index: (req,res) => {
        Meme.find({}, (err,allDemMemes) =>{
            res.render('memes/index', {memes: allDemMemes})
        })
    },
}