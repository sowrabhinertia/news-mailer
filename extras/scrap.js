const mysql=require("mysql");
var nodemailer = require('nodemailer');
var Promise = require("bluebird");


function toi_trending_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("trending") AND source_name=("Times of india")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query(" select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'Times of india' AND categories.types='trending' ", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;

  }
   z="email sent for toi_trending"
    email(x,y,z);
  });
  });
  return Promise.resolve();

}

function toi_sports_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("sports") AND source_name=("Times of india")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query("select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'Times of india' AND categories.types='sports'", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;
  }
   z="email sent for toi_sports"
    email(x,y,z);
  });
  });
}

function ndtv_trending_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("trending") AND source_name=("ndtv")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query("select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'ndtv' AND categories.types='trending'", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;
  }
   z="email sent for ndtv_trending"
    email(x,y,z);
  });
  });
}

function ndtv_sports_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("sports") AND source_name=("ndtv")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query("select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'ndtv' AND categories.types='sports'", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;

  }
   z="email sent for ndtv_sports"
    email(x,y,z);
  });
  });
}
function it_trending_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("trending") AND source_name=("india today")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query("select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'india today' AND categories.types='trending'", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;

  }
   z="email sent for indiatoday_trending"
    email(x,y,z);
  });
  });
}

function it_sports_email(){
var con = mysql.createConnection({
  host: "localhost",
  user: "sowrabhinertia",
  password: "starullal",
  database: "news1"
});
con.connect(function(err) {
if (err){
  console.error(err.message);
  return;
}
});
console.log("database accessible for sources");
con.query('SELECT headlines,links FROM news WHERE types= ("sports") AND source_name=("India today")', function(err, rows) {
   a=0;
   var all = new Array();
for(i=0;i<2*(rows.length);i++)
{
    all[i]=rows[a].headlines;
    i++;
    all[i]=rows[a].links;
    a++;
}
var y=all.toString();
y=y.split(",").join("\n")
    console.log(y);
    console.log("database accessible for email list");
    con.query("select source.eid from register join source on register.eid=source.eid join categories on register.eid=categories.eid where source.source_name= 'india today' AND categories.types='sports'", function (err, result, fields) {
      if (err) {
        console.error(err.message);
        return;
      };
    if(result.length > 0){
    for(var row in result){
    for(var column in result[row]){
     x=result[row][column]+",";
      console.log(x);
    }
  }
  con.end();
  console.log("connection removed"); }
  else{
    console.log("no subscribers");
    return;
  }
   z="email sent for indiatoday sports"
    email(x,y,z);
  });
  });
}
function email(x,y,z){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'top.news.mailer@gmail.com',
    pass: 'starsullal'
  }
});

            const mailOptions = {
              from: 'sowrabhsullal@gmail.com',
              to:x,
              subject: 'Top ten news',
              text: y
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error.message);
              } else {
                console.log("");
                console.log(z);
                console.log('Email sent: ' + info.response);

              }
            });
}
function done(){
  console.log("All emails sent");
}

function run(){
toi_trending_email().delay(8000)
    .then(toi_sports_email).delay(8000)
    .then(ndtv_trending_email).delay(8000)
    .then(ndtv_sports_email).delay(8000)
    .then(it_trending_email).delay(8000)
    .then(it_sports_email).delay(8000)
    .then(done)
    .catch(Promise.TimeoutError, function(e) {
        console.log('error', e);
    });
  };
  run();
