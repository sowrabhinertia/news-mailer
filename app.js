const request=require("request");
const cheerio=require("cheerio");
const express=require("express");
const alert=require("alert-node");
const app=express();
const path=require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var publicDir = require('path').join(__dirname,'/public');

app.use(express.static(publicDir));

app.get('/',function(req,res){
  res.sendfile("index1.html");
  console.log("djdjdjd")
})
app.post("/subscribe",function(req,res){
  console.log(req.body);
  console.log("inserting into database");
  var con = mysql.createConnection({
    host: "localhost",
    user: "sowrabhinertia",
    password: "starullal",
    database: "news1",
    multipleStatements: true
  });
  con.connect(function(err) {
    if (err){
      console.error(err.message);
      return;
    }
     name=req.body.name;
     email=req.body.email;
     source=req.body.source;
     if(source == "Times of india" ){
       var sid= 'toi_1' ;
     }
     else if(source == "india today" ){
       var sid= 'it_1' ;
     }
     else if(source == "ndtv" ){
       var sid= 'ndtv_1' ;
     }
    console.log("database connected");
    var sql1 = "INSERT INTO register (name, eid,password) VALUES ('"+req.body.name+"', '"+req.body.email+"','"+req.body.password+"') ";
    var sql2 = "INSERT INTO categories (eid,types) VALUES ('"+req.body.email+"','"+req.body.types+"') ";
    var sql3 = "INSERT INTO source (eid,source_name) VALUES ('"+req.body.email+"','"+req.body.source+"')";

    con.query(sql1, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
console.log("register filled")
    });
    con.query(sql2,function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
       console.log("categories filled");
    });
    con.query(sql3, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("source filled");
      alert("You have subscribed sucessfully "+req.body.name);
       con.end();
       console.log("connection removed");

    });
    });
    //res.redirect('news.html');
});
app.get("/display",function(req,res){
  var con = mysql.createConnection({
    host: "localhost",
    user: "sowrabhinertia",
    password: "starullal",
    database: "news"
  });
  con.connect(function(err) {
  if (err){
    console.error(err.message);
    return;
  }
  console.log("database accessible");
  console.log(name);
  con.query(" SELECT* FROM login WHERE name=('"+name+"') AND email=('"+email+"') AND source=('"+source+"') ", function (err, data) {
    if (err) {
      console.log("hello error");
      console.error(err.message);
      throw err;
    }
    else{
    console.log(data);
    res.send(data);
  }
  con.end();
});
});
});
app.listen(3000);
console.log("server running on port 3000");
