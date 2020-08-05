var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./express-app.db");
var session = require("express-session");
const { query } = require("express");

router.get("/:id", (req, res) => {
  var id = req.params.id;
  var email = session.user.email;
  var QUERY = `select title, body from content where id="${id}"`;
  db.all(QUERY, (_, row) => {
    console.log(row);
    var { title, body } = row[0];
    res.render("show", { title: title, author: email, body: body });
  });
});

module.exports = router;
