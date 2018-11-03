var express=require('express');
var mysql=require('mysql')
var schedule=require("node-schedule")

var j = schedule.scheduleJob('30 12 * * *', function del(){
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
    var sql = "delete from news";
    con.query(sql, function (err, result) {
      if (err){
        console.error(err.message);
        return;
      }
      console.log("record deleted from news");
       con.end();
    });

});
});
