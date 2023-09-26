const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const transporter = require('./mailer');

const app = express();
const port = process.env.PORT || 3200;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/send-email', (req, res) => {
  const { name, email, mobile, city, message } = req.body;
 
  const mailOptions = {
    from: 'rahsharma9991@gmail.com',
    to: 'info@gigatorb.com',
    subject: 'Welcome Mail',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCity: ${city}\nMessage: ${message}`,
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Email sent:', info.response);
      
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
