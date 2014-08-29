/*
 * Module dependencies
 */
var express = require('express'); 
var hbs = require('hbs');
//var path = require("path");
var http = require("http");

var app = express();

/*
 * Setup Handlebars as templating engine 
 */
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.set('views', __dirname + '/views')

/*
 * Setup logging to console 
 */
app.use(express.logger('dev'))

/*
 * Setup app to look for resources in public 
 */
//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

/*
 * Route1 - Not working yet
 */
app.get('/', function (req, res) {
  res.render('index', {title:'Bootstrapped!'});
});


/*
 * Route2 
 */
app.get('/testParse', function(req, res) {
	res.render('testParse', { title : 'TestParse', content : 'This came from app.js'});
});


/*
 * Make app listen to port 3000 
 */
//app.listen(3000)
port = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(port);