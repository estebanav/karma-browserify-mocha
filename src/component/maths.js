var test = require("..test/test");

module.exports = {
	add : function( el1, el2 ){ 
		return (el1 + el2);
	},
	times: function( el1, el2){
		return el1*el2;
	},
	ver: function(){
		return test();
	}
}
