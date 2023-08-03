const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

global.contextPath = __dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/test', require('./routes/test/test.js'));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 퐅에서 대기 중')
});

module.exports = app;