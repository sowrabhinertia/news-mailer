function email(){
  var nodemailer = require('nodemailer');
const mysql=require("mysql");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sowrabhsullal@gmail.com',
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
  if(result.length > 0){
          for(var row in result){
          for(var column in result[row]){
            const emaillist=result[row][column]+",";
            console.log(emaillist);
            const mailOptions = {
              from: 'sowrabhsullal@gmail.com',
              to:emaillist,
              subject: 'Top ten news',
              text: 'That was easy!'
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
