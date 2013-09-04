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