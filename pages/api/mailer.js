const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail', // Your email service (e.g., 'Gmail', 'Yahoo', 'Outlook')
    host:'smtp.gmail.com',
    secure: false ,
    auth: {
      user: 'rahsharma9991@gmail.com', // Your email address
      pass: 'taxy katt axeu rnfg',   // Your email password (consider using environment variables)
    },
  });
  module.exports = transporter;