/*
 * 
 * Name space lp.base.object
 *
 *
 * Author:
 * Eric Kiilu - 2013 (c)
 *
 * LICENSE http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Copyright: 
 *
 * Eric Kiilu
 * 
 * Version 0.0.0.1
 *
 */

define(
	[
	"./lp.base",
	"../jquery/src/core",
	"./lp.base.type"
	],function(
		base,
		jqcore,
		type
		){
	//Check whether object has certain property and is not empty
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

		var newObject = jqcore.extend(true,{},object)
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