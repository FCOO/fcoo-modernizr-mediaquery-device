/***********************************************
gruntfile.js for fcoo-modernizr-mediaquery-device

https://github.com/FCOO/fcoo-modernizr-mediaquery-device

***********************************************/

module.exports = function(grunt) {

    "use strict";

    //***********************************************
    grunt.initConfig({
        "fcoo_grunt_plugin":{
            default: {
                "haveJavaScript": true,  //true if the packages have js-files
                "haveStyleSheet": true,  //true if the packages have css and/or scss-files
                "haveGhPages"   : true,  //true if there is a branch "gh-pages" used for demos

	            //Cmd to be run at the start of prod-task. BUILD THE MODERNIZR
	            "beforeProdCmd": "modernizr --config src/modernizr-config.json --dest src/fcoo-modernizr.js --metadata src/fcoo-modernizr-metadata.json",			

	            //Cmd to be run at the start of dev-task. BUILD THE MODERNIZR **SAME AS beforeProdCmd**
	            "beforeDevCmd" : "modernizr --config src/modernizr-config.json --dest src/fcoo-modernizr.js --metadata src/fcoo-modernizr-metadata.json",			

                "afterProdCmd" : "",     //Cmd to be run at the end of prod-task
                "afterDevCmd"  : "",     //Cmd to be run at the end of dev-task

                "DEBUG"        : false   //if true different debugging is on and the tempoary files are not deleted
            }
        }
    });

	

    //****************************************************************
    //Load grunt-packages
    grunt.loadNpmTasks('grunt-fcoo-grunt-plugin');
};