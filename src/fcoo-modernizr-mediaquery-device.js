/****************************************************************************
	fcoo-modernizr-mediaquery-device.js,

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-modernizr-mediaquery-device
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";

	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};
	var ns = window.fcoo;


	/******************************************
	Initialize/ready
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

		//Create fcoo.modernizrDevice
		ns.modernizrDevice = new window.ModernizrDevice();

		//Create fcoo.modernizrMediaquery
		ns.modernizrMediaquery = new window.ModernizrMediaquery();

		//For consistency: 'create' modernizr in window.fcoo
		ns.modernizr = Modernizr;



	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));