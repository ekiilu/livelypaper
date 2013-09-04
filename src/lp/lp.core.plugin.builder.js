/*
 * 
 * Name space lp.base.type
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

	plugin.builder = function(){
			function getSandbox(id){
				var sandbox = new Sandbox(id);
				//Do all the other things in here including adding plugins to the sandbox
				return sandbox;
			}
			return{
				getSandbox: getSandbox
			}
		}();
		return plugin.builder;
	});