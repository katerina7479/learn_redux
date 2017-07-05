var React = require('react');
var ReactDOM = require('react-dom');

//Load css
require('style!css!foundation-sites/dist/foundation.min.css')
require('style!css!sass!applicationStyle')
$(document).foundation();

// Call it
ReactDOM.render(
  <div>
  </div>,
  document.getElementById('app')
);

require('./redux-example.jsx');
