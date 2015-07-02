describe('MainDiv', function() {
  it('does stuff', function() {
    var React = require('react/addons');
    var MainDiv = require('../src/components/MainDiv.jsx');
    var TestUtils = React.addons.TestUtils;

    var main = TestUtils.renderIntoDocument(
      <MainDiv name="world"/>
      //React.createElement(MainDiv, {name: 'world'})
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(main, 'div');
    expect(main.getDOMNode().textContent).toEqual('Hello, world!');
  });
});