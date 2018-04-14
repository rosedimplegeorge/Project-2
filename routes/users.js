const express = require('express');
const router = express.Router();

const User = require('../models/userModel')

// GET users Index. 
router.get('/', function(req, res, next) {
  User.find({})
  .then((users) => {
    res.render('users/index',{
      users : users
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

//CREATE A NEW USER

router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/',(req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    yrs_Of_Exp: req.body.yrs_Of_Exp
  })

  user.save()
  .then((savedUser) => {
    res.redirect(`/users/${savedUser._id}`)
  }).catch((error) => {
    console.log(error)
  })

})

//GET the User To EDIT/UPDATE

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('users/edit',{
        user: user
    })
  })
})

//UPDATE AN EXISTING USER

router.put('/:id', (req,res) =>{
  //console.log(req)
  User.findByIdAndUpdate(req.params.id,{
    userName: req.body.userName,
    email: req.body.email,
    yrs_Of_Exp: req.body.yrs_Of_Exp
  },{new: true}).then((updatedUser)=> {
    res.redirect(`/users/${updatedUser._id}`)
  })
  .catch((error) => {
    console.log(error)
  })
})

//DELETE A USER

router.delete('/:id',(req, res) => {
  User.findByIdAndRemove(req.params.id).then(() => {
    // console.log('User Deleted')
    // res.send("User Deleted")
    res.redirect('/users')
  })
  .catch((error) => {
    console.log(error)
  })
})

// GET TechStack Index. 

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((users) => {
      res.render('techStack/index',{
        users : users
      })
  })
  .catch((error) => {
      console.log(error)
  })
})



module.exports = router;

