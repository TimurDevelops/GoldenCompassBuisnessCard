const express = require('express');
const cors = require('cors');
const fs = require("fs");
const nodemailer = require('nodemailer');

let config;

try {
  config = require('./config.json');
} catch (ex) {
  config = process.env
}
const {
  env,
  EMAIL_USER,
  EMAIL_PASS,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN
} = config

const https = require("https");
const http = require("http");
const credentials = {};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL_USER,
    pass: EMAIL_PASS,
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN
  }
});

transporter.verify().then(console.log).catch(console.error);

if (env === 'prod') {
  const privateKey = fs.readFileSync('./sslcert/gc-school.key', 'utf8');
  const certificate = fs.readFileSync('./sslcert/gc-school_com_chain.crt', 'utf8');
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
    from: EMAIL_USER,
    to: sendToEmail,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function (error, info) {
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
