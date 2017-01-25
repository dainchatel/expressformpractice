// import express
var express = require('express');
// import the router (from express)
var router = express.Router();

// since we're using a router it's now router.get()
router.get('/results', function(request, response) {
// this will render the index ejs page
  response.render('results', {
// these properties are passed down in case I need them
    pageTitle: 'results',
    pageID: 'res'
  })
});

// export the index module

module.exports = router;
