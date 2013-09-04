define(
["../../src/lp/lp.base.object"],function(object){
	var should = chai.should();
	describe("Base",function(){
		describe("#base",function(){
			it("the lp.base.object should exist",function(){
				should.exist(object);
			})
			it("shallow clone working",function(){
				var string = [2];
				var string_copy = object.shallowClone(string);
				string.should.equal(string_copy);
			})
			it("deep cloning works",function(){
				var string = [3];
				var string_copy = object.deepClone(string);
				string.should.equal(string_copy);
			})
		})
	})
}
);