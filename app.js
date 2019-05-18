var express = require('express');
const api_helper = require('./API_helper')

var app = express();

app.get('/', function(req, res){
   // res.send("Hello world!");
    api_helper.make_API_call('https://ipinfo.io')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })

});

app.listen(3000);
