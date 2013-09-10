/*
 * 
 * Name space lp.base
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
	"./lp.core",
	"./lp.core.Module.Doc"
	],
	function(
		core,
		Doc
		){
	core.application = function(){
		
		function startAll(){
			hello = new Doc();
			hello.render({mode: "flipbook"});


		}

		function run(){

			window.addEventListener("load", startAll(), true);
		}

		return {
			run: run
		}
	}();

	return core.application;
});