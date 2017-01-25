// import express
var express = require('express');
// use app variable to call an express method
var app = express();
// set a title for the site
app.locals.siteTitle = 'Dain\'s Big List of Horror Movies';

// set the process to either one defined in the env or 5000
app.set('port', process.env.PORT || 5000);
// set ejs as the view engine
app.set('view engine', 'ejs');
// set the views directory, same as lecture since my file structure is similar
app.set('views', 'app/views');

// set the content that won't change -- the stuff in the public folder, so easier to route there
app.use(express.static('app/public'));
// set the route to the index page
app.use(require('./routes/index'));
// set the route to the moviequeue form
app.use(require('./routes/moviequeue'));
//set the route to the results page
app.use(require('./routes/results'));

// configure server to listen on port 5000 and console.log when it does
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port' + app.get('port'))
});
