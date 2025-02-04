const express = require('express');
const api = require('./api');
// const port = process.env.PORT || 3000;
const port = 3001;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("Trabajo final Web-Service");
});
app.use('/api', api);
