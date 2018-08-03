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
  res.render('pages/addUser', {
    data : []
  })
})

app.post('/user/create/creating', (req, res) => {
  let body = req.body
  return postUser(body).then((resp) => {
    if(resp.message == 'added success'){
      res.redirect('/user')
    }
    if(resp.message == 'username or email is require'){
      res.render('pages/addUser', {data: resp})
    }
    if(resp.length > 0){
      res.render('pages/addUser', {data: resp})
    }
  })
})

app.get('/user/update', (req, res) => {
  const query = req.query
  if (query.id) {
    return getUser(query.id).then((resp) => {
      res.render('pages/putUser', {
        data: resp[0]
      })
    })
  } else {
    res.redirect('/user')
  }


})

app.get('/user/delete', (req, res) => {
  const query = req.query
  if (query.id) {
    return getUser(query.id).then((resp) => {
      res.render('pages/delUser', {
        data: resp[0]
      })
    })
  } else {
    res.redirect('/user')
  }
})

app.post('/user/delete', (req, res) => {
  let body = req.body
  return deleteUser(body).then((resp) => {
    res.redirect('/user')
  })

})

app.post('/user/update/updating', (req, res) => {
  let body = req.body
  // res.json(body)
  return putUser(body).then((resp) => {
    res.redirect('/user')
  })
})

app.get('/ebouchure', (req, res) => {
  return getEbouchure().then((resp) => {
    res.render('pages/ebouchure', {
      data: resp
    })
  })
})

app.get('/ebouchure/create', (req, res) => {
  res.render('pages/addb')
})

app.post('/ebouchure/create/creating', (req, res) => {
  let body = req.body
  return postEbouchure(body).then((resp) => {
    res.redirect('/ebouchure')
  })
})

app.get('/ebouchure/update', (req, res) => {
  const query = req.query
  if (query.id) {
    return getEbouchure(query.id).then((resp) => {
      res.render('pages/putb', {
        data: resp[0]
      })
    })
  } else {
    res.redirect('/ebouchure')
  }
})

app.post('/ebouchure/update/updating', (req, res) => {
  let body = req.body
  //  res.json(body)
  return putEbouchure(body).then((resp) => {
    res.redirect('/ebouchure')
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