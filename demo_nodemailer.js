const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noxydesigns@gmail.com',
    pass: 'amason10'
  }
});

var mailOptions = {
  from: 'rapicomcast@gmail.com',
  to: 'erik-ror@gb.no',
  subject: 'Motivational quote of the day',
  text: 'If she succ... undress'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
