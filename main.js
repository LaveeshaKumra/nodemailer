var nodemailer = require('nodemailer');
var express =require("express");
var session= require("express-session");
var bodyParser=require("body-parser");
var app=express();
app.set("views",__dirname+"/views");
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('port',process.env.PORT || 4300);
var mysql=require("mysql");
app.set('view engine','ejs');
var path = require('path');





app.get("/",function(req,res){
res.render("main");
});


app.post("/send",function(req,res){
  //res.render("1");
  var eid=req.body.emailid;
  console.log(eid);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kumradaughter15@gmail.com',
      pass: 'mankrilove3'
    }
  });


  var mailOptions = {
    from: 'kumradaughter15@gmail.com',
    to: eid,
    subject: 'Sending Email using Node.js',
    html: '<h1>Hey this is Laveesha kumra</h1>.<br> Welcome to our page ! <br> Thanks, for register.<br> <a>click</a> here to verify. '
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});



app.listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});
