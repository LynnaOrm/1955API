var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index:function(req, res){
        User.find({}, function(err, users){
            res.json(users)
        })
        
    },
    create:function(req, res){
        User.create({name: req.params.username}, function(err, user){
            res.redirect('/')
        })

    },

    
    destroy:function(req, res){
        User.remove({name: req.params.name}, function(err){
            return res.redirect('/')
        })
    },
    
    getOne:function(req, res){
        User.findOne({name: req.params.name}, function(err, person){
            return res.json(user)
        })
    },






}