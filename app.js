var express = require('express');

var app = express();
app.set("view engine","ejs");

// app.get('/',function(req,res){
//     res.send("Hello World!");
// });

// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });

app.get('/ejs',function(req,res){
    res.render("index");
});

app.listen(5000);