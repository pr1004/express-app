var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user == undefined);
  if(req.session.user == undefined) 
    return res.render('login',{ msg: "로그인 해주세요"});
  else
    return res.redirect('/board')
});

module.exports = router;
