var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var morgan = require('morgan')
var methodOverride = require('method-override')
// var config = require('config')

// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'))
app.use(methodOverride())
app.use('/uploads', express.static('uploads'))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Credentials', true)

    next()
})

module.exports = app