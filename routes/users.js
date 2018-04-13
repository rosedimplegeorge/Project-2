var express = require('express');
var router = express.Router();

const User = require('../models/userModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .then((users) => {
    //console.log(users);
    res.render('users/index',{
      users : users
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((users) => {
      //console.log(user)
      res.render('techStack/index',{
        users : users
      })
  })
  .catch((error) => {
      console.log(error)
  })
})

module.exports = router;

