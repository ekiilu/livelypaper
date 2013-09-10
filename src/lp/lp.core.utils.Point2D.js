define(
["./lp.core.utils"],
function(utils){
	Point2D = function(posX,posY){
		var x=posX,
			y=posY;

			function getX(){
				return x;
			}
			function getY(){
				return y;
			}
			return {
				getX: getX,
				getY: getY
			}

	};

	utils.Point2D = Point2D;
	return utils.Point2D
	
});