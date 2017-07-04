var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var PageOne = require('PageOne');
var PageTwo = require('PageTwo');


//Load css
require('style!css!foundation-sites/dist/foundation.min.css')
require('style!css!sass!applicationStyle')
$(document).foundation();

// Call it
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PageOne} />
      <Route path='page_two' component={PageTwo} />
    </Route>
  </Router>,
  document.getElementById('app')
);
