define(
	[
	"./lp.base",
	"../jquery/src/core",
	"./lp.base.type"
	],function(
		base,
		core,
		type
		){


	//Check whether object has certain propert and is not empty
	function has(object, property){
		if(!type.isAvailable(object)){
			return false;
		}
		var i,
			length;

		//read only the property of the object
		for (i=1,length =arguments.length;i<length;i++){
			property = arguments[i];
			object = object[property];
			if ( !isAvailable(object) ){
				return false;
			}
		}
		return true;
	}

	//deep copy of an object 
	function deepClone(object){

		var newObject = core.extend(true,{},object)
		return newObject;
	}

	//shallow copy of the object
	function shallowClone(object){
		var newObject =core.extend({},object);
		return newObject;

	}

	//Exposed public methods 
	 base.object = {
	 	has: has,
	 	deepClone: deepClone,
	 	shallowClone : shallowClone
	 };
	 return base.object;

	});