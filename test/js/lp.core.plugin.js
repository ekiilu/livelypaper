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
["../../src/lp/lp.core.plugin"],
function( plugin ){
	var should = chai.should();
	describe("Base",function(){
		describe("#base",function(){
			it("Builder Object should exist",function(){
				window.lp.core.plugin.should.equal( plugin );
			})
		
		})
	})
}
);