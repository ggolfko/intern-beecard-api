var app = require('express')();
var port = process.env.PORT || 7777;
var users = require('./user');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host        : 'localhost',
        user        : 'root',
        password    : ' ',
        database    : 'beecard'
    });
    res.locals.connect();
    next();
});

app.use('/', index);
app.use('/api/v1/users', users)

router.get('/', function(req, res, next){
    res.locals.connection.query('SELECT * from users', function(error, result, fields) {
        // if (error) thorw error
        res.send(JSON.stringify({"status": 200, "error": null, "response": result}))
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('<h1> Hello Node.js</h1>');
});

app.get('/server', function (req,res) {
    res.send('<h1> This is index page </h1>');
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
})

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
})

app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + 'Finish!')
    console.log(req.body)

})


app.listen(port, function() {
    console.log('starting node.js on port' + port);
});

