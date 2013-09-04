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