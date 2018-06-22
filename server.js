var app = require('express')();
var port = 7777;
var bodyParser = require('body-parser');
var mysql = require('mysql')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'beecard'
})

con.connect(function(err) {
    if(err) throw err
    console.log("Connected!")
})

app.put('/ebouchures', (req, res) => {
    const body = req.body
    let sql = `UPDATE ebouchures SET name='${body.name}', content='${body.content}', organization='${body.organization}', 
              tel='${body.tel}', tel='${body.tel}', cc_tel='${body.cc_tel}', email='${body.email}', 
              website='${body.website}', line='${body.line}', facebook='${body.facebook}', twitter='${body.twiiter}',
              linkedin='${body.linkedin}', photo='${body.photo}', qrcode='${body.qrcode}', address='${body.address}', 
              locality='${body.locality}', region='${body.region}', country='${body.country}', postalCode='${body.postalCode}', 
              isActive='${body.isActive}', locale='${body.locale}', publish='${body.publish}', private='${body.private}',
              market='${body.market}', note='${body.note}' WHERE id='${body.id}'  `

    con.query(sql, function(err, result) {
        if(err) throw err
        res.json("updated success!")
    })
})

app.get('/ebouchures', (req, res) => {
    var sql = `SELECT * FROM ebouchures`
    const query = req.query
    console.log(query)
    if( !!query.id ){
        sql = `SELECT * FROM ebouchures WHERE id='${query.id}'`
    }
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json(result)
    })
})

app.post('/ebouchures', (req, res) => {
    const body = req.body
    let sql = `INSERT INTO ebouchures(name, ebrochureId, userId, content, organization, tel, cc_tel, email,
              website, line, facebook, twitter, linkedin,  photo, qrcode, address, locality, region, country,
              postalCode, isActive, locale, publish, private, market, note) 
              VALUES ('${body.name}', '${mongoObjectId()}', '${body.userId}', '${body.content}', '${body.organization}',
              '${body.tel}', '${body.cc_tel}', '${body.email}', '${body.website}', '${body.line}', '${body.facebook}', '${body.twiiter}',
              '${body.linkedin}', '${body.photo}', '${body.qrcode}', '${body.address}', '${body.locality}', '${body.region}', '${body.country}',
              '${body.postalCode}', '${body.isActive}', '${body.locale}', '${body.publish}', '${body.private}',
              '${body.market}', '${body.note}')`
    console.log(sql)
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json({message:"added success!"})
    })
})

app.delete('/ebouchures', (req, res) => {
  var sql = `DELETE FROM ebouchures WHERE id='${req.body.id}'`
  con.query(sql, function(err, result) {
      if(err) throw err
      res.json("deleted success!")
  })
})

var mongoObjectId = function () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

app.get('/ebouchures/users', (req, res) => {
  var sql = "SELECT * FROM users"
  const query = req.query
  if(!!query.id){
      sql = `SELECT * FROM users WHERE id='${body.id}'`
  }
  con.query(sql, function(err, result) {
      if(err) throw err
      console.log("get it now")
      res.json(result)
  })
})


app.post('/ebouchures/users', (req, res) => {
    const body = req.body
    let sql = `INSERT INTO users(userId, firstname, lastname, username, password, email, tel, privilege)
              VALUES ('${mongoObjectId()}', '${body.firstname}', '${body.lastname}', '${body.username}', '${body.password}', 
              '${body.email}', '${body.tel}', '${body.privilege}')`
    console.log(mongoObjectId)
    console.log(sql)
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json("add success!")
    })
})

app.delete('/ebouchures/users', (req, res) => {
    const body = req.body
    let sql = `DELETE FROM users WHERE '${body.id}'`
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json({message:"deleted success!"})
    })
})


app.put('/ebouchures/users/', (req, res) => {
  const body = req.body
  let sql = `UPDATE users SET firstname='${body.firstname}', lastname='${body.lastname}', username='${body.username}', password='${body.password}', 
            email='${body.email}', tel='${body.tel}', privilege='${body.privilege}' WHERE id='${body.id}'`
  console.log(sql)
  con.query(sql, function(err, result) {
      if(err) throw err
      res.json("success!")
  })
})

app.listen(port, function() {
    console.log('starting node.js on port' + port);
});

