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