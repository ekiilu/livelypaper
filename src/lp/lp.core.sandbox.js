define([
"./lp.core",
"./lp.base.object",
"../jquery/src/core",
"../jquery/src/selector"
],function(core,object,jqcore,jqselector,jqsupport){


	sandbox = function(){
		var id,
			box = null;

		function setId(_id){
			id =_id;
		}

		function getId(){
			return id;
		}
		function getBox(){

			//check if box is already created if not create it
			if(object.has(box)){
				box = jqcore("#nice");
				return box;
			}
			else{
				//create the element and append it 
				var div = document.createElement("div");
				div.id = id;
				div.height = "300";
				div.width = "300";
				div.background = "blue";
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