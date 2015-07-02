React = require('react');
MainDiv = require('./components/MainDiv.jsx');

React.render(
  <MainDiv name="World" />,
  //React.createElement(MainDiv, {name: 'World'}),
  document.getElementById('hello')
);