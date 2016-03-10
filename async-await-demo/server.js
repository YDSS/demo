var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname)));

app.listen(8888);
console.log('server start on port 8888');

