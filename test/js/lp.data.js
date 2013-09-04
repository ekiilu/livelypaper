/*
 * 
 * Name space lp.data
 *
 * Each Module corresponds to an independent unit of functionality
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

 
define(["../../src/lp/lp.data"],function(data){
//getthe chai should 
var should = chai.should();
//data class
describe("Data",function(){
	describe("#main",function(){
		it("should have windows object",function(){
			should.exist(window);
		})
		it("should return windows data object",function(){
			window.lp.data.should.equal(data);
		})
	})
})
});