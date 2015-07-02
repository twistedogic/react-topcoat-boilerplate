var React = require('react');

var MainDiv = React.createClass({
  render: function() {
    return <div>Hello, {this.props.name}!</div>;
    //return React.DOM.div(null, 'Hello, ' + this.props.name + '!');
  }
});

module.exports = MainDiv;