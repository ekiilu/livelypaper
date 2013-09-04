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
["../../src/lp/lp.base"],function(base){
	var should = chai.should();
	describe("Base",function(){
		describe("#base",function(){
			it("should have the base object on the windows object",function(){
				window.lp.base.should.equal(base);
			})
		})
	})
}
);