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
["../../src/lp/lp.core.pubsub"],function(pubsub){
	var should = chai.should();
	describe("Core",function(){
		describe("#pubsub",function(){
			it("should have windows object",function(){
			window.lp.core.pubsub.should.equal(pubsub);	
			})
			
		})
	})
}
);