/*
 * 
 * Name space lp.core.sandbox
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
	"./lp.core",
	"./lp.base.object",
	"../jquery/src/core",
	"../jquery/src/selector"
],
function(
	core,
	object,
	jqcore,
	jqselector,
	jqsupport
	){
	sandbox = function(sandboxId){

		var id = sandboxId,
			box = null;

		//Change the id through this value
		function setId(_id){
			id =_id;
		}

		function getId(){
			return id;
		}

		function getBox(){

			//check if box is already created if not create it
			if(object.has(box)){
				box = jqcore("#"+id);
				return box;
			}
			else{
				//create the element and append it 
				var div = document.createElement("div");
				div.id = id;
        		document.body.appendChild(div);
        		//Set the box to be the newly created div
        		box = div;

			}
			return box;
		};

		return{
			getId: getId,
			setId: setId,
			getBox: getBox
		}
	};

	core.Sandbox = sandbox;

	return core.Sandbox;
});