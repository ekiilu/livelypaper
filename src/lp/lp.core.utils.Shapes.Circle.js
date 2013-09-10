define(
["./lp.core.utils.Shapes"],
function(Shape){

   Circle = function Circle(posX,posY,canvasContext,radius,_color){
		var x  = posX,
			y  = posY,
			ctx = canvasContext,
			r = radius,
			color = _color;


		 function draw(){
			ctx.fillStyle ="rgba(0, 0, 200, 0.5)";
			ctx.beginPath();
			ctx.arc(x,y,radius,0,Math.PI*2,true);
			ctx.closePath();
			ctx.fill();
			
		}

		function getX(){
			return x;
		}

		function getY(){
			return y;
		}

		function getRadius(){
			return radius;
		}


		return {
			getX: getX,
			getY: getY,
			draw: draw,
			getRadius: getRadius
		}
		

	}

	Shape.Circle = Circle;
	return Shape.Circle;
});