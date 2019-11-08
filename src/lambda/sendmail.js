const nodemailer = require("nodemailer");
// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, ".env") });

exports.handler = function(event, context, callback) {
  const { sender_mail, name, content, subject } = JSON.parse(event.body);
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "henri160797@gmail.com",
      pass: "77N47123"
    }
  });
  const mailOptions = {
    from: sender_mail,
    to: "henri.dbel@gmail.com",
    subject: `personal site mail from ${name} about ${subject}.`,
    text: content
  };
  console.log(event.body, "event.body no json parse");
  console.log(JSON.parse(event.body), "event.body");
  smtpTransport
    .sendMail(mailOptions)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
      console.log("message sent", res);
    })
    .catch(err => {
      callback(err);
      console.log("error while sending message", err);
    });
};
