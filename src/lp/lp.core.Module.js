/*
*Name space lp.core.Module
*
*Each Module corresponds to an independet unit of functionality
*
*
*/

define([
	"./lp.core",
	"./lp.core.plugin.builder"

	],function(
		core,
		builder
		){

		core.Module = function(id,creator){
			var sandbox,
				module;

			sandbox = builder.getSandBox();//let the builder get the sandbox


			sandbox = builder.buildSandbox(id);
			module = creator(sandbox);

			//return the id of the module
			function getId(){
				return id;
			}
			//return sandbox
			function getSandBox(){
				return sandbox;
			}
			//return the underlying module
			function getModule(){
				return module;
			}

		}

	})