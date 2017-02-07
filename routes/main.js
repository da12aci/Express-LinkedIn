const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get('/', function(req, res, next) {
  console.log(req.session.data);
  res.render('print', { title: 'Personal Website Generator'});
});


module.exports = router;
