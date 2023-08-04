const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const keys_dir = 'config/secure/';
const ca = fs.readFileSync(keys_dir + 'ca_bundle.crt');
const key = fs.readFileSync(keys_dir + 'private.key');
const cert = fs.readFileSync(keys_dir + 'certificate.crt');
const options = {key, cert, ca};
const server = https.createServer(options, app);


app.set('port', 80 || 443);

global.contextPath = __dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/test', require('./routes/test/test.js'));

server.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 퐅에서 대기 중')
});

module.exports = app;