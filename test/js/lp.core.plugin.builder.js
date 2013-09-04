/*
 * 
 * Name space lp.data
 *
 *
 * Author:
 * Eric Kiilu - 2013 (c)
 *
 * LICENSE http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Copyright: 
 *
 * Eric Kiilu
 * 
 * Version 0.0.0.1
 *
 */

define(
["../../src/lp/lp.core.plugin.builder"],
function( builder ){
	var should = chai.should();
	describe("Plugin Builder",function(){
		describe("#lp.core.plugin.builder",function(){
			it("should have a box div existing in the current document",function(){
			 	sandBoxBuilder = builder;

				var sandboxSpy = sinon.spy(sandBoxBuilder,"getSandbox");

				var boxElement = sandboxSpy("lp.core.test");

				should.exist(boxElement);

			})
		
		})
	})
}
);