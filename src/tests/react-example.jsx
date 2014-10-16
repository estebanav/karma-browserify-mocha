var assert = require("assert"),
    Example= require('../../dist/component/react-example/example'),
    React = require('react/addons'),
    ReactTestUtils = React.addons.TestUtils;

describe('React Example :: ', function(){

    describe('Version', function(){
        var anExample = <Example name='World' />,
            instance;

        beforeEach(function() {
            instance = ReactTestUtils.renderIntoDocument(anExample);
        });

        afterEach(function(done) {
            React.unmountComponentAtNode(document.body);
            document.body.innerHTML = "";
            setTimeout(done);
        });

        it('Verify that a "Hello World" text is inside the DOM element generated', function(){
            var el = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div');
            assert.equal('Hello World', el.getDOMNode().textContent );
        })
    });

})