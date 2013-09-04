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
["../../src/lp/lp.core.Module"],function(Module){
	var should = chai.should();
	describe("Module",function(){
		describe("#module",function(){
			it("should return sandbox",function(){
				myModule = new Module("lp.core.Module.document",function(){
					return "hello";
				});

				var sandboxElement = myModule.getSandBox();
				var sandboxId = sandboxElement.getId();

				sandboxId.should.equal("lp.core.Module.document");
			})
		})
	})
}
);