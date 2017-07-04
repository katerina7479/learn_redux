var express = require('express');

// Create an app
var app = express();
const PORT = process.env.PORT || 3000;

// MIddleware to perform on every request
// See if traffic is http, we're redirecting https (oooo)
app.use(function (req, res, next) {
  var proto = req.headers['x-forwarded-proto']
  if (typeof (proto) == 'undefined' || (proto === 'http')) {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
