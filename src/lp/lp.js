/*
*namespace = core.lp
*/
define(function (){
	//this is private api
	var lp = {};
	var undef;
	//check whether the window is undefined
	if(window !== undef){
		window.lp = lp;
	}
	//public API
	return window.lp;
});