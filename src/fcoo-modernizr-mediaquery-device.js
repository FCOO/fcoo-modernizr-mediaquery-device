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

    //modernizrMediaqueryOptions *MUST* match $html-font-size, $create-FIRST-up, $create-LAST-down and $breakpoints in src/_fcoo-modernizr-mediaquery-variables.scss
    var modernizrMediaqueryOptions = {
            useWindowClientDim: true,
            htmlFontSize      : 16,     // = $html-font-size
            createFIRSTup     : false,  // = $create-FIRST-up
            createLASTdown    : false,  // = $create-LAST-down
            breakpoints       : {       // = $breakpoints
                "mini"       :    0, //Smaller than small phone portrait (< 320)
                "xsmall-port":  320, //Small phone portrait (320-479)
                "xsmall-land":  480, //Small phone landscape (480-576)
                "small"      :  576, //Small devices
                "medium"     :  768, //Tablets portrait
                "large"      :  992, //Table landscape + desttop
                "xlarge"     : 1200  //Large desttop
            }
        };


    //Create fcoo.modernizrDevice
    ns.modernizrDevice = new window.ModernizrDevice({
        scale: false,
        modernizr: {
            device: true,
            os    : true,
            ie    : false
        }
    });

    //Create fcoo.modernizrMediaquery
    ns.modernizrMediaquery = new window.ModernizrMediaquery( modernizrMediaqueryOptions );

    //For consistency: 'create' modernizr in window.fcoo
    ns.modernizr = Modernizr;

    //Add https-test
    ns.modernizr.addTest('https', window.location.protocol == 'https:');

}(window.Modernizr, jQuery, this, document));