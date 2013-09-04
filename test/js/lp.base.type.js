define(
["../../src/lp/lp.base.type"],function(base_type){
	var should = chai.should();
	describe("BaseType",function(){
		describe("#basetype",function(){
			it("should have the base object on the windows object",function(){

				window.lp.base.type.should.equal(base_type);
			})

			it("should return false when isAvailable has 0 arguments",function(){
				var available = base_type.isAvailable();
				available.should.equal(false);
			})

			it("should return false when isAvailable has 1 argument and the argument object does not exist", function(){
				var not_existing;
				var available = base_type.isAvailable(not_existing);
				available.should.equal(false);
			})

		

			it("it should return true given a variable string which is not null",function(){
				var objects = {};
				objects.eric = "ERIC KIILU";
				objects.child = {};
				objects.child.name ="something";

			
				var available = base_type.isAvailable(objects, "child","name", "string");
				available.should.equal(true);
			})

		})
	})
}
);