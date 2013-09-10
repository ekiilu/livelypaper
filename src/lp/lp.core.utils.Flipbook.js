/*
 * 
 * Name space lp.core.utils.Flipbook module 
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
 * This draws a flipbook given 
 *
 */

define(
	[
	"./lp.core.utils",
	"./lp.core.utils.Shapes.Circle"
	],

	function(
		utils,
		Circle
		){

		Flipbook = function(canvasContext){
			var ctx = canvasContext;

			//Render the flipbook given canvas context
			function render(){

				circle =  new Circle(20,40,canvasContext,10,"green");
				circle.draw();

			}

			return{
				render: render
			}

		}


		utils.Flipbook = Flipbook;
		return utils.Flipbook;
	});