const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./main.js');

router.get('/',function(req,res){
  if (req.session.user) {
   res.render('message');
 } else {
   res.redirect("/login");
 }
});

router.post('/', function (req,res){
let gabMessage = models.Messages.create({
    gab:req.body.gabber,
    UsersId: req.session.userId
  }).then(function(){
    console.log(gabMessage);
    res.redirect('/');
  })
});

module.exports = router;