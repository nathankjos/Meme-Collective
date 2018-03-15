const User = require('../models/User')

module.exports = {
    index: (req,res) => {
        console.log('User index')
    },
    new: (req, res)=>{
        res.render('User new')
    },
    create: (req,res) => {
        console.log('User create')
    }
}