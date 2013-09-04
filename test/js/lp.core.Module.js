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
 
define(
["../../src/lp/lp.core.Module"],function(module){
	var should = chai.should();
	describe("Module",function(){
		describe("#module",function(){
			it("Module Item should exist",function(){
				should.exist(module);
			})
		})
	})
}
);