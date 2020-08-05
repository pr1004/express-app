var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./express-app.db");
var session = require('express-session')

router.get('/', (_, res)=>{
    res.render('login', { msg : ' ' });
})

router.post('/', (req, res) => {
    var email = req.body.email;
    var pwd = req.body.pwd;
    const QUERY = `select * from users where email="${email}";`;
    db.all(QUERY, (_, row) =>{
        if(row.length == 0) return res.render('login',  { msg : "다시 로그인 하세요!"});
        if(row[0].password == pwd ){
            session.user = row[0];
            return res.redirect('/board');
        }
        return;
    })
})

module.exports = router;