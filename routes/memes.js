const
    express = require('express'),
    memesRouter = new express.Router()
    memesCtrl = require('../controllers/memes.js')

memesRouter.get("/", memesCtrl.index)
memesRouter.get("/new", memesCtrl.new)
memesRouter.post("/", memesCtrl.create)

    module.exports = memesRouter