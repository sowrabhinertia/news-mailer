const request=require("request");
const cheerio=require("cheerio");
const mysql=require("mysql");
request("https://timesofindia.indiatimes.com/",(error,res,html)=>{
  if(!error && res.statusCode==200){
    const $=cheerio.load(html);
    $('.stories').find('a').each(function(e) {
      //const headlines=$(this).text();
      const headlines=$(this).attr('title');
      const link=$(this).attr('href');
      const links="https://timesofindia.indiatimes.com"+link ;
      console.log(headlines);
      console.log(links);
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
      var sql = "INSERT INTO toi (headlines,links) VALUES ('"+ headlines +"', '"+ links +"')";
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
