const request=require("request");
const cheerio=require("cheerio");
const mysql=require("mysql");
var Promise = require("bluebird");
function toi_trending(){
  console.log(" ");
  console.log("extracting toi_trending");
  console.log(" ");
  request("https://timesofindia.indiatimes.com/",(error,res,html)=>{
  if(!error && res.statusCode==200){
    const $=cheerio.load(html);
    $('.top-story').find('a').each(function(e) {
      //const headlines=$(this).text();
      const headlines=$(this).attr('title');
      const link=$(this).attr('href');
      const links="https://timesofindia.indiatimes.com"+link ;
      console.log(headlines);
      console.log(links);
      //var types = myModule.types;
      //console.log(types);
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
      const types="trending";
      const source_name="Times of india";
      var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
      con.query(sql, function (err, result) {
        if (err){
          console.error(err.message);
          return;
        }
        console.log("record inserted into database");
         con.end();
      });
    });
    });

//console.log(types);
}
});
return Promise.resolve();
}
function toi_sports(){
  console.log(" ");
  console.log("extracting toi_sports");
  console.log(" ");
  request("https://timesofindia.indiatimes.com/sports",(error,res,html)=>{
    if(!error && res.statusCode==200){
      const $=cheerio.load(html);
      $('.sports-home-videos').find('.w_img,<a>').each(function(e) {
        //const headlines=$(this).text();
        const headlines=$(this).attr('title');
        const link=$(this).attr('href');
        const links="https://timesofindia.indiatimes.com/"+link ;
        console.log(headlines);
        console.log(links);
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

        const types="sports";
        const source_name="Times of india";
        var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
        con.query(sql, function (err, result) {
          if (err){
            console.error(err.message);
            return;
          }
          console.log("record inserted into database");
           con.end();
        });
      });
      });
  }

  });
}
function ndtv_trending(){
  console.log(" ");
  console.log("extracting ndtv_trending");
  console.log(" ");
  request("https://www.ndtv.com/",(error,res,html)=>{
    if(!error && res.statusCode==200){
      const $=cheerio.load(html);
      $('.featured_cont').find('.item-title,<a>').each(function(e) {
        const headlines=$(this).text();
        //const headlines=$(this).attr('title');
        const link=$(this).attr('href');
        const links=link ;
        console.log(headlines);
        console.log(links);
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
        const types="trending";
        const source_name="ndtv";
        var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
        con.query(sql, function (err, result) {
          if (err){
            console.error(err.message);
            return;
          }
          console.log("record inserted into database");
           con.end();
        });
      });
      });
  }

  });

}
function ndtv_sports(){
  console.log(" ");
  console.log("extracting ndtv_sports");
  console.log(" ");
  request("https://sports.ndtv.com/",(error,res,html)=>{
    if(!error && res.statusCode==200){
      const $=cheerio.load(html);
      $('.mod-body').find('.item-title,<a>').each(function(e) {
        const headlines=$(this).text();
        //const headlines=$(this).attr('title');
        const link=$(this).attr('href');
        const links=link ;
        console.log(headlines);
        console.log(links);
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
        const types="sports";
        const source_name="ndtv";
        var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
        con.query(sql, function (err, result) {
          if (err){
            console.error(err.message);
            return;
          }
          console.log("record inserted into database");
           con.end();
        });
      });
      });
  }

  });

}
function it_trending(){
  console.log(" ");
  console.log("extracting india today trending");
  console.log(" ");
  request("https://www.indiatoday.in/",(error,res,html)=>{
    if(!error && res.statusCode==200){
      const $=cheerio.load(html);
      $('.top-n-most-popular-stories').find('a').each(function(e) {
        const headlines=$(this).text();
        const link=$(this).attr('href');
        const links="https://www.indiatoday.in"+link ;
        console.log(headlines);
        console.log(links);
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
        const types="trending";
        const source_name="india today";
        var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
        con.query(sql, function (err, result) {
          if (err){
            console.error(err.message);
            return;
          }
          console.log("record inserted into database");
           con.end();
        });
      });
      });
  }

  });

}

function it_sports(){
  console.log(" ");
  console.log("extracting india-today-sports");
  console.log(" ");
  request("https://www.indiatoday.in/sports",(error,res,html)=>{
    if(!error && res.statusCode==200){
      const $=cheerio.load(html);
      $('.tech-trip').find('span:not(".pic"),a').each(function(e) {
        const headlines=$(this).text();
        //const headlines=$(this).attr('title');
        const link=$(this).attr('href');
        const links=link;
        console.log(headlines);
        console.log(links);
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
        const types="sports";
        const source_name="india today";
        var sql = "INSERT INTO news (types,source_name,headlines,links) VALUES ('"+ types +"','"+ source_name +"','"+ headlines +"', '"+ links +"')";
        con.query(sql, function (err, result) {
          if (err){
            console.error(err.message);
            return;
          }
          console.log("record inserted into database");
           con.end();
        });
      });
      });
  }

  });

}
function done(){
  console.log(" ");
  console.log(" ");
  console.log("All records inserted into database");
}
function run(){
toi_trending().delay(8000)
    .then(toi_sports).delay(8000)
    .then(ndtv_trending).delay(8000)
    .then(ndtv_sports).delay(8000)
    .then(it_trending).delay(8000)
    .then(it_sports).delay(8000)
    .then(done)
    .catch(Promise.TimeoutError, function(e) {
        console.log('error', e);
    });
  };
  run();
