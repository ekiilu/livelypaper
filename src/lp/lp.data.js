/*
 * 
 * Name space lp.data
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