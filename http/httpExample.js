var http = require('http');
var queryString = require('querystring');
var server = http.createServer(function(req, res){
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
    });
    
    req.on('end', function(){
        post = queryString.parse(post);

        res.write(post.title);
        res.write(post.text);
        res.end();
    });
}).listen(3000);

//使用Express改写例子
var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());
app.all('/', function(req, res){
    res.send(req.body.title + req.body.text);
});

app.listen(3000);
