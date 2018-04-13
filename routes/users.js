var express = require('express');
var router = express.Router();

const User = require('../models/userModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  User.find({})
  .then((users) => {
    console.log(users);
    res.send(users)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((user) =>{
      console.log(user)
      res.send(user)
  })
  .catch((error) => {
      console.log(error)
  })
})

module.exports = router;

