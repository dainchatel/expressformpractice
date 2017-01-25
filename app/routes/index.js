// import express
var express = require('express');
// import the router (from express)
var router = express.Router();

// since we're using a router it's now router.get()
router.get('/', function(request, response) {
// this will render the index ejs page
  response.render('index', {
// these properties are passed down in case I need them
    pageTitle: 'HOME',
    pageID: 'home'
  })
});

// export the index module

module.exports = router;
