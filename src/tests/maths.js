var assert = require("assert"),
	maths= require('../component/maths');

describe('Math Operations :: ', function(){

  describe('Adding', function(){
    it('should return 2 when the two arguments are 1 and 1', function(){
      	assert.equal(2, maths.add(1,1) );
    })
  });

  describe('Version', function(){
    it('returns the version...', function(){
      	assert.equal('1.0', maths.ver() );
    })
  });

})
