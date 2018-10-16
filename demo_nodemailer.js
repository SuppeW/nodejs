const nodemailer = require('nodemailer');
const fs = require('fs');

function randomQuote(filename){
  fs.readFile(filename, function(err, data){
    if(err) throw err;
    var lines = data.toString().split('\n');
    var randomline = lines[Math.floor(Math.random()*lines.length)];
    console.log(randomline);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rapicomcast@gmail.com',
        pass: 'h3STEP0lse'
      }
    });

    var mailOptions = {
      from: 'rapicomcast@gmail.com',
      to: 'aleksander.harjo@gmail.com, erik-ror@gb.no, anders.woien96@gmail.com',
      subject: 'DAILY MOTIVATION',
      text: randomline
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error){
        console.log(error);
      }else{
        console.log('Email sent: '+info.response);
      }
    });
  });
}

randomQuote("379quotes.txt")
