const User = require('../models/User')

module.exports = {
    index: (req,res) => {
        console.log('User index')
    },
    show: (req, res) => {
        User.findById(req.params.id, (err, thatUser) => {
            res.send("User Show")
        })
    },
}