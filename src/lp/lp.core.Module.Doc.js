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
	"./lp.core.Module",
	"./lp.core.Module.swipebook",
	"./lp.core.utils.Shapes.Circle",
	"./lp.core.utils.Flipbook"
	],
	function(
		Module,
		swipebook,
		Circle,
		Flipbook
		){
		pdf_doc = Module("lp.core.Module.document",function(sandbox){

			//Variables accessible



			//Start the module this automatically initializes the module code
			function render(){
				//posX,posY,canvasContext,radius,_color
				var box = sandbox.getBox();
				//Set the width and height
				box.style.width ="100%";
				box.style.height ="100%";
				box.style.background ="purple";
				box.style.position = "absolute";
				var canvas = document.createElement("canvas");
				canvas.style.background ="yellow";
				canvas.height = 1200;
				canvas.width = 1200;
			
				box.appendChild(canvas);


				//var canvas = document.getElementById("myCanvas");
				var context = canvas.getContext("2d");
				


				
			      var imageObj = new Image();
			      var image2 = new Image();

			      imageObj.onload = function() {
			        context.drawImage(imageObj, 0, 0);
			      };

			      image2.onload = function(){
			      	context.drawImage(image2, 600, 0);

			      	 flip = new Flipbook(context);
				 flip.render();

			      }
			      imageObj.src = '../assets/images/farm-0.jpeg';
			      image2.src = '../assets/images/farm-1.jpeg';


			

				
				
				}


		      function nextPage(){
		      	var box = sandbox.getBox();
		      	 console.log(box);
		      }

		      return {
		      	nextPage: nextPage,
		        render:  render
			 	
		     }

		});

		Module.doc = pdf_doc.getModule;

		return Module.doc;
});