var express= require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');

//mongo connection
var mongoURI="mongodb://localhost:27017/groceryList";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
  console.log('error connecting to mongo', err);
});
mongoDB.once('open', function(){
  console.log('connected to mongoDB');
});
//allows post to be sent
app.use(bodyParser.json());
//use static files
app.use(express.static('public'));
//routes
app.use('/', index);

var server= app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port", 3000);
});
