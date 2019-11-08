const nodemailer = require("nodemailer");

exports.handler = function(event, context, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_LOGIN,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    }
  });
  console.log(event.body);

  transporter.sendMail(
    {
      from: process.env.MAIL_LOGIN,
      to: process.env.MAIL_TO,
      subject: process.env.SUBJECT + new Date().toLocaleString(),
      text: event.body
    },
    function(error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: "Ok"
        });
      }
    }
  );
};

// router.post("/", (req, res, next) => {
//   console.log("body of mail request", req.body);
//   const { sender, content, name } = req.body;
//   const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     auth: {
//       user: process.env.GMAIL,
//       pass: process.env.GPAS
//     }
//   });
//   const mailOptions = {
//     from: sender,
//     to: process.env.GMAILRECEIVE,
//     subject: `personal site mail from ${name}.`,
//     text: content
//   };
//   smtpTransport
//     .sendMail(mailOptions)
//     .then(res => {
//       console.log("message sent", res);
//     })
//     .catch(err => {
//       console.log("error while sending message", err);
//     });
//   res.json({ msg: "mail has been sent", sender: sender });
// });
