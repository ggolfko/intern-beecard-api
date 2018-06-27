var app = require('./app')
var port = 7777;
var ebouchures = require('./routes/ebouchures')
var users = require('./routes/users')
var images = require('./routes/images')

app.use('/api', ebouchures)
app.use('/api', users)
app.use('/api', images)

var server = app.listen(port, function() {

    let host = server.address().address
    let port = server.address().port
    console.log('starting node.js on' + port + host);
});

