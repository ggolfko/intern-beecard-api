var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var morgan = require('morgan')
var methodOverride = require('method-override')
var doQuery = require('./utils/doQuery')
var con = require('./config/route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'))
app.use(methodOverride())
app.use('/uploads', express.static('uploads'))

app.get('/showForm', (req, res) => {
    res.sendFile(__dirname + "/" + "showForm.html")
})

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('pages/index')
})


app.get('/user', (req, res) => {
    let sql = `SELECT * FROM users`
    doQuery(sql).then((resp) => {
        console.log(resp)
        res.render('pages/user', {
            data: resp
        })
    })
})

app.get('/user/create', (req, res) => {
    res.render('pages/addUser')
})

app.get('/ebouchure', (req, res) => {
    let sql = `SELECT * FROM ebouchures`
    doQuery(sql).then((resp) => {
        console.log(resp)
        res.render('pages/ebouchure', {
            data: resp
        })
    })  
})

app.get('/showData', (req, res) => {
    data = {
        fname: req.query.fname,
        lname: req.query.lname
    }
    console.log(data)
    res.end(JSON.stringify(data))
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Credentials', true)

    next()
})

module.exports = app