define(
	["./lp.core.Module"],function(Module){

		swipebook = Module("lp.core.Module.Swipebook",function(sandbox){
			function start(){
				box = sandbox.getBox();
				box.style.width = "100%";
				box.style.height ="100%";
				box.style.background = "blue";
			}
			return {
				start: start
			}
		});
		Module.Swipebook = swipebook.getModule();
		return Module.Swipebook;
	}
	);