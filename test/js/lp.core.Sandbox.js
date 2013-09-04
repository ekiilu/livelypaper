define(
["../../src/lp/lp.core.sandbox"],function( sandbox ){
	var should = chai.should();
	describe("Base",function(){
		describe("#base",function(){
			it("the lp.base.object should exist",function(){
				should.exist(sandbox.getId);
			})
			it("the object should have an element",function(){
				console.log(sandbox.getId());
			
			})
			
		})
	})
}
);