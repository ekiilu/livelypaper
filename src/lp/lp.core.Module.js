/*
 * 
 * Name space lp.core.Module
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
		"./lp.core.plugin.builder"
	],function(
		core,
		builder
		){

		core.Module = function(id,creator){
			var sandbox,
				module;

			sandbox = builder.getSandbox(id);//let the builder get the sandbox
			//return a module
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


			return {
				getId: getId,
				getModule: getModule,
				getSandBox: getSandBox
			}

		}

		return core.Module;

	})