var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var morgan = require('morgan')
var methodOverride = require('method-override')
const getUser = require('./test/user').getUser
const getEbouchure = require('./test/ebouchure').getEbouchure
const postEbouchure = require('./test/ebouchure').postEbouchure
const putEbouchure = require('./test/ebouchure').putEbouchure
const deleteEbouchure = require('./test/ebouchure').deleteEbouchure
const postUser = require('./test/user').postUser;
const deleteUser = require('./test/user').deleteUser
const putUser = require('./test/user').putUser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'))
app.use(methodOverride())
app.use('/uploads', express.static('uploads'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/user', (req, res) => {
   return getUser().then((resp) => {
       res.render('pages/user', {
           data: resp
       })
   })
})

app.get('/user/create', (req, res) => {
    res.render('pages/addUser')
})

app.post('/user/create/creating', (req, res) => {
    let body = req.body
    let data = {
        firstname : body.firstname,
        lastname :  body.lastname,
        username:  body.username,
        password:  body.password,
        email: body.email,
        tel: body.tel,
        privilege: "users"
      }
    return postUser(data).then((resp) => {
        res.redirect('/user')
    })
})

app.get('/user/update', (req, res) => {
    return getUser().then((resp) => {
        res.render('pages/putUser' , {
            data: resp
        })
    })
    
})

app.post('/user/delete', (req, res) => {
    let body = req.body
    let data = {
        
    }
    return deleteUser().then((resp) => {
        res.redirect('/user')
    })
    
})

app.post('/user/update/updating', (req, res) => {
    let body = req.body
    let data = {
            id : req.query.id,
            firstname : body.firstname,
            lastname :  body.lastname,
            username:  body.username,
            password:  body.password,
            email: body.email,
            tel: body.tel,
            privilege: "users"
        }
    return putUser(data).then((resp) => {
        res.redirect('/user')
    })
})

app.get('/ebouchure', (req, res) => {
    return getEbouchure().then((resp) => {
        res.render('pages/ebouchure' ,{
            data: resp
        })
    })
})

app.get('/ebouchure/create', (req, res) => {
    res.render('pages/addb')
})

app.post('/ebouchure/create/creating', (req, res) => {
    let body = req.body
    let data = {
        name: body.name,
        content: body.content,
        organization: body.organization,
        tel: body.tel,
        email: body.email,
        website: body.website,
        line: body.line,
        facebook: body.facebook,
        twitter: body.twitter,
        linkedin: body.linkedin,
        photo: body.photo,
        qrcode: body.qrcode,
        address: body.address,
        locality: body.locality,
        region: body.region,
        country: body.country,
        postalCode: body.postalCode,
        locale: body.locale,
        note: body.note
      }
    return postUser(data).then((resp) => {
        res.redirect('/user')
    })
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Credentials', true)

    next()
})

module.exports = app