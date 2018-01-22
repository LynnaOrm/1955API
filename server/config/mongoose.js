var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var mp = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/what_db');

//file system looking at file one at a time synchronously, models path, for each file in there run this function
fs.readdirSync(mp).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(mp +'/' + file)
    }
})

//this remains the same