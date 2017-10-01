var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var axios = require('axios');
var querystring = require('querystring');

require('dotenv').config();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var instance = axios.create({
  baseURL: 'https://api.imgur.com/3/',
  headers: { 'Authorization': 'Client-ID ' + process.env.IMGUR_CLIENT_ID }
});

app.get('/search/:query', function(req, res) {
  const url = 'gallery/search/top/0/?' + querystring.stringify({ q: req.params.query });
  instance.get(url)
    .then(function (result) {
      results = result.data.data.filter(item => !item.is_album && !item.nsfw && !item.animated)
      
      var total_results = results.length
      if (req.query.init !== undefined && req.query.ending !== undefined){
        results = results.slice(req.query.init, req.query.ending)
      }

      results.forEach(function(element) {
        element.price = 10.00
      });
      res.send( {total: total_results, data: results} );
    })
    .catch(function (error) {
      console.log(error);
    })
  ;
});


app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') {
  require('reload')(server, app);
}

server.listen(process.env.PORT, function () {
  console.log('Listening on port '.concat(process.env.PORT))
});
