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
["../../src/lp/lp.core.utils.Shapes.Circle"],
function( Circle ){
	var should = chai.should();
	describe("Shape Circle",function(){
		describe("#lp.core.utils.Shapes.Circle",function(){
			it("should have Cicle object",function(){
			 	window.lp.core.utils.Shapes.Circle.should.equal(Circle);

			})
		
		})
	})
}
);