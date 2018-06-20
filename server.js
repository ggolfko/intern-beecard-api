var app = require('express')();
var port = process.env.PORT || 7777;
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
    console.log("Connected!!")
})

app.put('/ebouchures', (req, res) => {
    const body = req.body
    var sql = "UPDATE ebouchures SET name = '"+ body.name +"' WHERE id = '"+ body.id +"'"
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json("updated success!")
    })
})

app.get('/ebouchures', (req, res) => {
    var sql = "SELECT * FROM ebouchures"
    const query = req.query
    console.log(query)
    if( query.id != null && query.id != undefined && query.id != '' ){
        sql = "SELECT * FROM ebouchures WHERE id=" + query.id
    }
    con.query(sql, function(err, result, fields) {
        if(err) throw err
        res.json(result)
        res.json(fields)
    })
})

app.post('/ebouchures', (req, res) => {
    var sql = "INSERT INTO ebouchures(name) VALUES '"+ req.body.name +"')"
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json("added success!")
    })
})

app.delete('/ebouchures', (req, res) => {
    var sql = "DELETE FROM ebouchures WHERE id =" + req.body.id
    con.query(sql, function(err, result) {
        if(err) throw err
        res.json("deleted success!")
    })
})

app.listen(port, function() {
    console.log('starting node.js on port' + port);
});

