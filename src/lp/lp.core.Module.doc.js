/*
 * 
 * Name space lp.core.Module
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
	"./lp.core.Module"
	],
	function(
		Module
		){
		pdf_doc = Module("lp.core.Module.document",function(sandbox){

			//Start the module this automatically initializes the module code
			//Start the module
			function start(){
				  var box = sandbox.getBox();
				  var mytext=document.createTextNode("what");
				  box.setAttribute("width","300");
				  box.setAttribute("height","300");
				  box.setAttribute("background","green");
				  box.appendChild(mytext);
				}


		      function nextPage(){
		      	var box = sandbox.getBox();
		      	 console.log(box);
		      }

		      return {
		      	nextPage: nextPage,
		      	start:  start
			 	
		     }

		});

		Module.doc = pdf_doc.getModule;

		return Module.doc;
});