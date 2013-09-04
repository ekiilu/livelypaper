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