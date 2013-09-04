define([
	"./lp.core.plugin",
	"./lp.core.sandbox"
	],function(
		plugin,
		Sandbox
		){
		function getSandbox(id){
			var sandbox = new Sandbox();
			sandbox.setId( id ); //set id of the sandbox

			//Do all the other things in here including adding plugins to the sandbox
			return sandbox;

		}
		plugin.builder =getSandbox;
		return plugin.builder;
	});