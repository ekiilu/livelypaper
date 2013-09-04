/*
 * 
 * Name space lp.base.type
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
	["./lp.base"],
	function(base){

	base.type ={};

     //This function determines whether are particular object exists or is null returns false if it does not exist
    function isAvailable(value){

    	var length = arguments.length, 
    				 last = length -1; 
    				 last_argument = arguments[length-1];

    	if(length <= 0){
    		return false;
    	}
    	if(length === 1){

    		if(value === null || value === undefined){
    			return false;
    		}


    		return true;
    	}
    	else if(length > 1){

    
    		 for(var i =0;i<last-1;i++){
    		 	if (!isAvailable( value )) {
    		 		return false;
    		 	}
    		 	value = value[ arguments[ i+1 ] ];

    		 	
    		 }

    		  var type = typeof value;



    	

    		 if ( type === "function" ){
    		 	console.log("Function");


    		 	return value instanceof Function;
    		 }
    		 else if (type === 'string'){ 

    		 	var internalClass = Object.prototype
    		 						.toString
    		 						.call(value)
    		 						.slice(8,-1)
    		 						.toLowerCase();

    		 	console.log("This is last "+last_argument);
    		 	

    		 	return internalClass === arguments[length-1];
    		 	
    		 }

    		 else {

    		 return false;

    		}
    	}

    	//check if its equal
    	if(length > 2){

    	}
    }
   
    base.type = {
  		isAvailable: isAvailable
    };

    return base.type;
 });