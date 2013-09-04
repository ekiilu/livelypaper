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
	[
	"../../src/lp/lp"
	],
	function(lp){
		
		var should = chai.should();

		describe("Lp",function(){
			describe("#window",function(){
				it("should have lp", function(){
					should.exist(lp);
				})
				it("should have window object", function(){
					should.exist(window);
				})
				it("Window.lb should be equalto created", function(){
					window.lp.should.equal(lp);
				})
			})
		})
	}
);