var assert = require("assert"),
	maths= require('../src/maths');

describe('Math Operations', function(){
  describe('Adding', function(){
    it('should return 2 when the two arguments are 1 and 1', function(){

      	assert.equal(2, maths.add(1,1) );
    })
  })
})
