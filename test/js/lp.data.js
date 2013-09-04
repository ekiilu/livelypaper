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