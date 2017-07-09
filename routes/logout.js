const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', function(req,res){
  req.session.destroy();
  res.render('logout');
});


module.exports = router;