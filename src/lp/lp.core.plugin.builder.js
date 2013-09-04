/*
 * 
 * Name space lp.core.plugin.builder
 *
 * Each Module corresponds to an independent unit of functionality
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