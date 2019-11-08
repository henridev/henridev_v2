const nodemailer = require("nodemailer");
// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, ".env") });

exports.handler = function(event, context, callback) {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "henri160797@gmail.com",
      pass: "77N47123"
    }
  });

  const mailOptions = {
    from: "xx_sender",
    to: "henri.dbel@gmail.com",
    subject: `personal site mail from ${"xx_name"}.`,
    text: "xx_content"
  };
  console.log(event.body);

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

// router.post("/", (req, res, next) => {

// });
