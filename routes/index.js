var express = require('express');
let user = require('../models/users');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  user.find({}).then(user => {
    res.render('index', {user:user});
  }).catch(err => console.log(err));
});

//get the single detail of user
router.get('/get/:id', (req, res) => {
  user.findById(req.params.id).then(user => {
    res.render('details', {user:user});
  }).catch(err => console.log(err));
});

// edit the details of user
router.get('/edit/:id', (req, res) => {
  user.findById(req.params.id).then(user => {
    res.render('edit_user', {user:user});
  }).catch(err => console.log(err));
});

//update user detail
router.post('/edit/update/:id', function (req, res) {
  let users ={};
  users.firstName = req.body.first;
  users.LastName = req.body.last;
  users.email = req.body.email;
  users.password = req.body.password;

  let query = {_id:req.params.id}

  user.update(query, users, function(err){
    if(err){
      console.log(err);
      return;
    }else{
      res.redirect('/');
    }
  });
});


module.exports = router;
