const express = require('express');
const cors = require('cors');
const fs = require("fs");
const nodemailer = require('nodemailer');

const {env} = require('./config.json');
const {emailUser} = require('./config.json');
const {emailPass} = require('./config.json');
const https = require("https");
const http = require("http");
const credentials = {};

const transporter = nodemailer.createTransport({
  // host: 'smtp.yandex.ru',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

if (env === 'prod'){
  const privateKey = fs.readFileSync('./sslcert/golden-compass-app.key', 'utf8');
  const certificate = fs.readFileSync('./sslcert/golden-compass-app_com_chain.crt', 'utf8');
  credentials.key = privateKey;
  credentials.cert = certificate;
}

const app = express();
const PORT = process.env.PORT || 5002;

// Init Middleware
app.use(express.json())

app.use(cors());


app.get('/ping', (req, res) => {
  res.send(`Pong`);
});

app.post('/send-email', (req, res) => {
  const {sendToEmail, subject, body} = req.body;

  const mailOptions = {
    from: emailUser,
    to: sendToEmail,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send(true);
});

const listener = env === 'prod' ? https.createServer(credentials, app) : http.createServer(app)

listener.listen(Number(PORT), () => {
  console.log(`Sever started on port ${PORT}`);
});
