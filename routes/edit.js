var express = require("express");
const { query } = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./express-app.db");

router.get("/:id", (req, res) => {
  var id = req.params.id;
  const QUERY = `select title, body from content where id="${id}"`;
  db.all(QUERY, (_, row) => {
    var { title, body } = row[0];
    res.render("edit", { id: id, title: title, body: body });
  });
});

router.post("/:id", (req, res) => {
  var id = req.params.id;
  var title = req.body.title;
  var content = req.body.content;
  const QUERY = `update content set title="${title}", body="${content}" where id="${id}"`;
  db.all(QUERY, (_, __) => {
    res.redirect("/board");
  });
});

module.exports = router;
