var express = require('express');
var router = express.Router();
var session = require('express-session')
/* GET home page. */
router.get('/', function(req, res, next) {
  if(session.user == undefined) 
    return res.render('login',{ msg: "로그인 해주세요"});
  res.render('board')
});

module.exports = router;
