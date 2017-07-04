var React = require('react');
var Navigation = require('Navigation');


var Main = (props) => {
  return (
    <div>
          <Navigation />
          <h2>Main</h2>
          {props.children}
        </div>
  );
};

module.exports = Main;
