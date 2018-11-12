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
  res.sendfile("index.html");
})

app.post("/reg_toi",function(req,res){
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
    console.log("database connected");
    var sql1 = "INSERT INTO register (name, eid,password) VALUES ('"+req.body.name+"', '"+req.body.email+"','"+req.body.password+"') ";
    var sql2 = "INSERT INTO categories (eid,types) VALUES ('"+req.body.email+"','"+req.body.types+"') ";
    var sql3 = "INSERT INTO source (eid,source_name) VALUES ('"+req.body.email+"','Times of india')";
   var sql4 = "INSERT INTO phone (eid,phone_number) VALUES ('"+req.body.email+"','"+req.body.phone+"')";
    con.query(sql1, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
console.log("inserted into register");
    });
    con.query(sql2,function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
       console.log("inserted into categories");
    });
    con.query(sql3, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into source");

    });
    con.query(sql4, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into phone");
      alert("You have subscribed sucessfully "+req.body.name);
       con.end();
       console.log("connection removed");

    });
    });
    //res.redirect('index.html');
});

app.post("/reg_ndtv",function(req,res){
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
    console.log("database connected");
    var sql1 = "INSERT INTO register (name, eid,password) VALUES ('"+req.body.name+"', '"+req.body.email+"','"+req.body.password+"') ";
    var sql2 = "INSERT INTO categories (eid,types) VALUES ('"+req.body.email+"','"+req.body.types+"') ";
    var sql3 = "INSERT INTO source (eid,source_name) VALUES ('"+req.body.email+"','ndtv')";
    var sql4 = "INSERT INTO phone (eid,phone_number) VALUES ('"+req.body.email+"','"+req.body.phone+"')";
    con.query(sql1, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
console.log("inserted into register");
    });
    con.query(sql2,function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
       console.log("inserted into categories");
    });
    con.query(sql3, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into source");

    });
    con.query(sql4, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into phone");
      alert("You have subscribed sucessfully "+req.body.name);
       con.end();
       console.log("connection removed");

    });
    });
    //res.redirect('index.html');
});

app.post("/reg_it",function(req,res){
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
    console.log("database connected");
    var sql1 = "INSERT INTO register (name, eid,password) VALUES ('"+req.body.name+"', '"+req.body.email+"','"+req.body.password+"') ";
    var sql2 = "INSERT INTO categories (eid,types) VALUES ('"+req.body.email+"','"+req.body.types+"') ";
    var sql3 = "INSERT INTO source (eid,source_name) VALUES ('"+req.body.email+"','india today')";
    var sql4 = "INSERT INTO phone (eid,phone_number) VALUES ('"+req.body.email+"','"+req.body.phone+"')";
    con.query(sql1, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
console.log("inserted into register");
    });
    con.query(sql2,function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
       console.log("inserted into categories");
    });
    con.query(sql3, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into source");

    });
    con.query(sql4, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("inserted into phone");
      alert("You have subscribed sucessfully "+req.body.name);
       con.end();
       console.log("connection removed");

    });
    });
    //res.redirect('index.html');
});
app.listen(3000);
console.log("server running on port 3000");
