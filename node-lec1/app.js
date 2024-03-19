var express = require('express');
// const ejs = require("ejs");

var app = express();
app.set("view engine","ejs");

// app.get('/',function(req,res){
//     res.send("Hello World!");
// });

// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });

// app.get('/ejs',function(req,res){
//     res.render("index");
// });

app.get('/',function(req,res){
    res.render("login");
});

app.get('/ejs',function(req,res){
    res.render("register");
});

app.listen(5000);


// database - localhost/phpmyadmin
// start - mySQL Database and Aparche Web Server (Running) and start