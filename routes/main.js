const express =  require('express');
const router = express.Router();
const models = require('../models');
const message = require("../routes/message");
const login = require("../routes/login");
const logout = require("../routes/logout");
const signup = require("../routes/signup");

router.use('/message', message);
router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);


router.get('/', function(req,res){
   res.redirect("/signup");
})

module.exports = router;