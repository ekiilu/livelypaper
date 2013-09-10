define(
	[
	"./lp.core.Module",
	"./lp.core.utils.Shapes.Rectangle"],
	function(
		Module,
		Rectangle){

		//Define the flip book

		flipbook = Module("lp.core.Module.Flipbook",function(sandbox){
			//Start the module i.e by adding it
			function start(context){

				cir = new Circle(70,30,context,10,"white");
				cir.draw();
				
				rec = new Rectangle(50,30,context,10,"pink");
				rec.draw();
			}

			return {
				start: start
			}

		});

		Module.Flipbook = flipbook.getModule();
		return Module.Flipbook;
	});
