const express = require('express');
const router = express.Router();

// GET: render the page
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Internet Technology - Group 24'
  });
});

module.exports = router;
