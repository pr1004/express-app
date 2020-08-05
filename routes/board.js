var express = require('express');
const { log } = require('debug');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./express-app.db");
router.get('/',(req, res) => {
	login(req,res)
	var sql = 'select * from content'
	db.all(sql,(err,row) => {
		console.log(row);
		res.render('board',{ contents: row });
	})
	
});

router.get('/delete',(req,res) => {
	login(req,res)
	req.session.destroy(function(){ 
		req.session;
		});
	res.redirect('/')
})

function login(req,res){
	if(req.session.user == undefined) 
	  return res.render('login',{ msg: "로그인 해주세요"});
}
module.exports = router;