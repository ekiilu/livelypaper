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
 * Eric Kiilu - 2013
 * 
 * Version 0.0.0.1
 *
 */

define(
["../../src/lp/lp.core"],function(core){
	var should = chai.should();
	describe("Core",function(){
		describe("#core",function(){
			it("should have core object",function(){
				should.exist(core);
			})

			it("should have namespace windows.lp.core",function(){
				should.exist(window.lp.core);
			})
		})
	})
}
);