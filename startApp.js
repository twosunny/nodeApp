process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var express = require('./config/express_config');

var app = express();
app.listen(3000);

module.exports = app;

console.log('Server running');

