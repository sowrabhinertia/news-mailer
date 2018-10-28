const mysql=require("mysql");

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
console.log("database accessible");
con.query('SELECT headlines,links FROM news', function(err, rows) {
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
    email(y)
  });


  function email(x){
    var nodemailer = require('nodemailer');
  const mysql=require("mysql");

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'top.news.mailer@gmail.com',
      pass: 'starsullal'
    }
  });
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
  console.log("database accessible");
  con.query("SELECT eid FROM register", function (err, result, fields) {
    if (err) {
      console.error(err.message);
      return;
    };
    if(result.length > 0 ){
            for(var row in result){
            for(var column in result[row]){
              const emaillist=result[row][column]+",";
              console.log(emaillist);
              const mailOptions = {
                from: 'top.news.mailer@gmail.com',
                to:emaillist,
                subject: 'Top news',
                text: x
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error.message);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            }
        }

        con.end();
        console.log("connection removed"); }
        else{
          console.log("no subscribers");
        }

  });
  }
