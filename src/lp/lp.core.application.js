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
	["./lp.core",
	"./lp.core.Module.doc"],
	function(
		core,
		doc
		){
	core.application = function(){
		
		function startAll(){
			console.log("hello world");
			hello = new doc();
			hello.start();
		}

		function run(){
			document.addEventListener("load", startAll(), true);
		}

		return {
			run: run
		}
	}();

	return core.application;
});