const
    express = require('express')
    app = express()
    logger = require('morgan')
    bodyParser = require('body-parser')
    ejsLayouts = require('express-ejs-layouts')
    axios = require('axios')
    dotenv = require('dotenv')
    mongoose = require('mongoose')
    memesRouter =require('./routes/memes.js')
    PORT = 3000

app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/Project-Navigator', (err) => {
    console.log(err||"Connected to MongoDB")
})



app.use(express.static(`${__dirname}/public`))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(ejsLayouts)

app.get('/', (req, res)=>{
    res.send("This is the root route")
})

app.use('/memes', memesRouter)

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})