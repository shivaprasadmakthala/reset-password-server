const nodemailer = require('nodemailer');

module.exports = async (email,token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },

      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    let mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Reset Password",
      html: `<div style="margin : 0 auto; width: 450px; border:1px solid lightgray; border-radius:5px; padding:1rem; text-align:center;">
      <h1 style="font-size:1rem; color:salmon; text-align: left;"> <lead>Dear user,</lead> <br/> <br/>if you have requested for a new password. Please verify this email to reset the password or simply ignore this email.</h1>
      <a href="https://reset-password-mern.netlify.app/${token}" target="_blank" style="font-size: 1rem; padding:0.75rem; border:none; border-radius:5px; text-decoration:none; background-color: rgb(76, 175, 75); color: whitesmoke; cursor:pointer;">Reset Now</a>
      </div>`,
    };
    await transporter.sendMail(mailOptions);

    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};