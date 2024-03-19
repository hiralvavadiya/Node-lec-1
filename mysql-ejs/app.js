var express = require('express');
var bodyParser = require('body-parser');
var mysql  = require('mysql');
var app = express();

var con = mysql.createConnection({
    host: "localhost",  
    user:"root",
    password:"",
    database:"node"
});

con.connect();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',function(req,res){
    res.render("index");
});

app.post('/',function(req,res){
    
    var name  =req.body.name;

    var query = "insert into user(name)values('"+name+"')";

    con.query(query,function(error,result,field){
        if(error) throw error;

        res.redirect('/');
    })

})
app.listen(3000);