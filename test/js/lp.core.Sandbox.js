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
["../../src/lp/lp.core.sandbox"],function( sandbox ){
	var should = chai.should();
	var spy = sinon.spy();
	
	describe("lp.core.sandbox",function(){
		describe("#sandbox",function(){
			
			it("should be able to setup the id of the sandbox",function(){
				var mysandbox = new sandbox("lp.core.test");
				///mysandbox.setId("lp.core.test");
				var get_id = sinon.spy(mysandbox,"getId");
				//test the return value for the get id
				var id= get_id();

				id.should.equal("lp.core.test");

				})

			it("should create box element if it doesnt not exist",function(){
			  	var mysandbox = new sandbox("lp.core.test");
			  	var box  = sinon.spy(mysandbox,"getBox");
			  	var box_element = box();
			  	box_element.id.should.equal("lp.core.test");
							
			})
			
		})
	})
}
);