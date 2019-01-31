var express = require('express');
let user = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {
    title: 'Users Profile'
  });
});

// post users listing
router.post('/POST', function(req, res){
    user = new user();
    user.firstName = req.body.first;
    user.LastName = req.body.last;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
});





module.exports = router;
