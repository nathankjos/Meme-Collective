const Meme = require('../models/Meme.js')

module.exports = {
    index: (req,res) => {
        Meme.find({}, (err,allDemMemes) =>{
            res.render('memes/index', {memes: allDemMemes})
        })
    },  
    new: (req, res)=>{
        res.render('memes/new')
    },
    create: (req,res) => {
        console.log('meme create')
    }
}