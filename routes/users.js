const
    express = require('express'),
    usersRouter = new express.Router()
    usersCtrl = require('../controllers/users.js')




usersRouter.post("/", usersCtrl.create)
usersRouter.get("/new", usersCtrl.new)

module.exports = usersRouter