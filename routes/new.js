var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./express-app.db");
var session = require("express-session");

router.get("/", (_, res) => {
  res.render("new", { author: session.user.email });
});

router.post("/", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;
  const QUERY = `insert into content (title, body) values ("${title}", "${content}")`;
  db.all(QUERY, (_, row) => {
    res.redirect("/board");
  });
});
module.exports = router;
