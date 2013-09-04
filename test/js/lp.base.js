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