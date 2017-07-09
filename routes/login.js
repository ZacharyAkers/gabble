const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./main.js');

let errorMessages =[];

router.get('/', function(req,res){
  res.render('login', {wrong: errorMessages});
});

router.post('/', function(req,res){
  console.log("this is a post");
  req.checkBody("username", "Please Enter a valid username.").notEmpty();
  req.checkBody("password", "Please Enter a password").notEmpty();

  let errors = req.validationErrors();
  if(errors){
    errors.forEach(function(validationErrors){
    errorMessages.push(errors.msg);
    res.redirect('/login');
    });
  }else{
    models.User.findOne({
      where:{
        username: req.body.username
      }
    }).then(function(user){
      if(!user){
        res.redirect('signup');
      }else{
        if(user.password === req.body.password){
          req.session.user = user.username;
          req.session.userId = user.id;
          res.render('index', {username: req.session.username})
        }
      }
    })
  }

})


module.exports = router;