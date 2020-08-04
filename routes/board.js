var express = require('express');
const { log } = require('debug');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./express-app.db");
router.get('/',(_, res) => {
	var sql = 'select * from content'
	db.all(sql,(err,row) => {
		console.log(row);
		res.render('board',{ contents: row });
	})
	
});

module.exports = router;