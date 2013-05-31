var http = require('http'),
httpProxy = require('http-proxy'),
connect = require('connect'),
http = require('http'),
path = require('path'),
proxy = new httpProxy.RoutingProxy(),
fs = require('fs');

var express = require('express'),
app = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/static'));
});

app.use(express.static(path.join(__dirname)));

app.get('/api/*', function(req, res){
  proxy.proxyRequest(req, res, {
    host: 'oink.i.nomic.com',
    port: 3000
  });
});

app.post('/api/*', function(req, res){
  proxy.proxyRequest(req, res, {
    host: 'oink.i.nomic.com',
    port: 3000
  });
});

app.put('/api/*', function(req, res){
  proxy.proxyRequest(req, res, {
    host: 'oink.i.nomic.com',
    port: 3000
  });
});

app.listen(1337);
