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

			//First create the element and add it 
			//posX,posY,canvasContext,radius,_color
			var box = sandbox.getBox(),
					  canvas = document.createElement("canvas");

			//Box styling
			box.style.background ="purple";
			box.style.position = "absolute";
			box.style.top ="50%";
			box.style.left ="50%";
			box.appendChild(canvas);


			


			//Resize the canvans
			function resizeCanvas() {
			    var widthToHeight = 5 / 3,
			    	 newWidth = window.innerWidth,
			    	 newHeight = window.innerHeight,
			    	 newWidthToHeight = newWidth / newHeight;
			    
			    if (newWidthToHeight > widthToHeight) {
			        newWidth = newHeight * widthToHeight;
			        box.style.height = newHeight + 'px';
			        box.style.width = newWidth + 'px';
			    } else {
			        newHeight = newWidth / widthToHeight;
			        box.style.width = newWidth + 'px';
			        box.style.height = newHeight + 'px';
			    }
			    
			    box.style.marginTop = (-newHeight / 2) + 'px';
			    box.style.marginLeft = (-newWidth / 2) + 'px';



			    canvas.width = newWidth;
			    canvas.style.background ="blue";


			    canvas.height = newHeight;


		


			    //DO canvas rendering
			    //var canvas = document.getElementById("myCanvas");
				var context = canvas.getContext("2d"),
							  image1 = new Image(),
							  image2 = new Image(),
							  canvasHalfWidth = canvas.width/2;

		

				image1.src = '../assets/images/farm-0.jpeg';
				image2.src = '../assets/images/farm-1.jpeg';

				image1.onload = function() {
				context.drawImage(image1, 0, 0,canvasHalfWidth,canvas.height);
				};

				image2.onload = function(){
				context.drawImage(image2, canvasHalfWidth, 0,canvasHalfWidth,canvas.height);
				flip = new Flipbook(canvas,box);
				console.log(context.height +" context");
				flip.render();
				}

			}

			//Start the module this automatically initializes the module code
			function render(){
				resizeCanvas();
				window.addEventListener("resize",resizeCanvas,true);
				window.addEventListener("orientationchange",resizeCanvas,true);
			}

		      return {
		        render:  render
			 	
		     }

		});

		Module.doc = pdf_doc.getModule;

		return Module.doc;
});