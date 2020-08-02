var express = require('express');
var router = express.Router();

router.get('/',(_, res) =>{
    res.render('board');
});

module.exports = router;