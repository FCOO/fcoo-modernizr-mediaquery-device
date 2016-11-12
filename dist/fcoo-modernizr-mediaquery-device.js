/****************************************************************************
    fcoo-modernizr-mediaquery-device.js,

    (c) 2016, FCOO

    https://github.com/FCOO/fcoo-modernizr-mediaquery-device
    https://github.com/FCOO

****************************************************************************/

(function (Modernizr, $, window/*, document, undefined*/) {
    "use strict";

    //Create fcoo-namespace
    window.fcoo = window.fcoo || {};
    var ns = window.fcoo;


    /******************************************
    Initialize/ready
    *******************************************/
    $(function() { 

        //Create fcoo.modernizrDevice
        ns.modernizrDevice = new window.ModernizrDevice();

        //Create fcoo.modernizrMediaquery
        ns.modernizrMediaquery = new window.ModernizrMediaquery();

        //For consistency: 'create' modernizr in window.fcoo
        ns.modernizr = Modernizr;

        //Add https-test
        ns.modernizr.addTest('https', window.location.protocol == 'https:');


    }); //End of initialize/ready
    //******************************************



}(window.Modernizr, jQuery, this, document));