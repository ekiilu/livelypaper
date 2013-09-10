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
["../../src/lp/lp.core.utils.Shapes"],
function(Shapes){
	var should = chai.should();
	describe("utils",function(){
		describe("#Shapes",function(){
			it("Utils object should exist",function(){
				window.lp.core.utils.Shapes.should.equal(Shapes);
			})
		
		})
	})
}
);