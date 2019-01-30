var express = require('express');
let user = require('../models/users');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  user.find({}).then(user => {
    res.render('index', {user:user});
  }).catch(err => console.log(err));
});

module.exports = router;
