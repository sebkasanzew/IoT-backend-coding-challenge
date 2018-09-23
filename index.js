const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

require('dotenv').config()

require('./models/loki-schema')

const app = express()

const cars = require('./controllers/cars')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.use(cors())

app.use('/cars', cars)

app.listen(app.get('port'), () => {
    console.log('App started')
})
