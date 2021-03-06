define(
["./lp.core.utils.Shapes"],
function(Shape){

   Rectangle = function Rectangle(posX,posY,canvasContext,radius,_color){
		var x  = posX,
			y  = posY,
			ctx = canvasContext,
			r = radius,
			color = _color;


		 function draw(){
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(x,y,radius,0,Math.PI*2,true);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle ="#ffffff";
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

	Shape.Rectangle = Rectangle;
	return Shape.Rectangle;
});