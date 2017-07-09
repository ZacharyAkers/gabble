const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./main.js');

let errorMessages =[];

router.get('/', function(req,res){
  res.render('signup');
});

router.post('/', function(req,res){

  req.checkBody("username", "Please Enter a valid username.").notEmpty();
  req.checkBody("password", "Please Enter a password").notEmpty();
  req.checkBody("repassword", "Your passwords do not match, please re-enter").equals('password');

  let errors = req.validationErrors();
  if(errors){
    errors.forEach(function(validationErrors){
    errorMessages.push(errors.msg);
    res.redirect('/signup');
   });
  }else{
    let newUser = models.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function (user) {
       req.session.user = user.username;
       req.session.userId = user.id;
       res.redirect('/');
    });
  }
});

module.exports = router;