// create web server 
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

//create a directory for comments
var commentsPath = path.join(__dirname, '..', 'data', 'comments.json');

//read comments from json file
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

//get comments
router.get('/', function(req, res, next) {
  res.json(comments);
});

//post comments
router.post('/', function(req, res, next) {
  comments.push(req.body);
  fs.writeFileSync(commentsPath, JSON.stringify(comments));
  res.json(comments);
});

module.exports = router;