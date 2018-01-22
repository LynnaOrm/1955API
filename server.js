var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;
var session = require('express-session');

app.use(express.static(path.join(__dirname, '/client')));
app.use(bp.json());
app.use(session({secret: "secret"}));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)


app.listen(port, function(){
    console.log("YAY")
});


//this page remains the same 