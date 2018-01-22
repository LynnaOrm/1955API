var users = require('./../controllers/usercontroller.js') //go in and go up a level. 

module.exports = function(app){
    app.get('/',function(req, res){
        users.index(req, res)
    });

    app.get('/newuser/:username', function(req, res){ //creating user, add name into the database
        users.create(req, res)
    });

    app.get('/remove/:name/', function(req, res){ //will delete a name from the database
        users.destroy(req, res);
    });

    app.get('/:name', function(req, res){ //will bring up the document of that particular person
        users.getOne(req, res);
    });

    
}//routes