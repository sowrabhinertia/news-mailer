const request=require("request");
const cheerio=require("cheerio");
const mysql=require("mysql");
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
