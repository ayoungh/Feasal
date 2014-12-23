(function () {   

    /*
    * Project name:  Feasal
    * Author : Anthony Young
    * Version : 0.1
    */

    //check for jquery
    if (!window.jQuery) {
        //if no jquery include it
        document.write('<scr' + 'ipt type="text/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></sc' + 'ript>');
    }


    //Object to hold all information
    var prometheus = {
        version : '0.1'
        ,id : 'Lib-bar'
        ,htmlcontent : ''
        ,libs : {
            "Angular":(typeof angular != "undefined") ? [angular, angular.version.full] : "null"
            ,"Backbone": (typeof Backbone != "undefined") ? [Backbone] : "null"
            ,"Cufon": (typeof Cufon != "undefined") ? [Cufon] : "null"
            ,"D3":(typeof d3 != "undefined") ? [d3, d3.version] : "null"
            ,"Dojo":(typeof dojo != "undefined") ? [dojo, dojo.version] : "null"
            ,"Ext":(typeof Ext != "undefined") ? [Ext, Ext.version] : "null"
            ,"Jo":(typeof jo != "undefined") ? [jo, jo.version] : "null"
            ,"jQuery":(typeof jQuery != "undefined") ? [jQuery, jQuery().jquery] : "null"
            ,"jQuery UI":(typeof jQuery != "undefined" && jQuery.ui && jQuery.ui != "undefined") ? [jQuery.ui, jQuery.ui.version] : "null"
            ,"MochiKit":(typeof MochiKit != "undefined") ? [MochiKit, MochiKit.VERSION] : "null"
            ,"Modernizr":(typeof Modernizr != "undefined") ? [Modernizr, Modernizr._version] : "null"
            ,"MooTools":(typeof MooTools != "undefined") ? [MooTools, MooTools.version] : "null"
            ,"Prototype":(typeof Prototype != "undefined") ? [Prototype, Prototype.Version] : "null"
            ,"pv":(typeof pv != "undefined") ? [pv, pv.version.major + "." + pv.version.minor] : "null"
            ,"Eve":(typeof eve != "undefined") ? [eve, eve.version] : "null"
            ,"Scriptaculous":(typeof Scriptaculous != "undefined") ? [Scriptaculous, Scriptaculous.Version] : "null"
            ,"SoundManager":(typeof soundManager != "undefined") ? [soundManager, soundManager.versionNumber] : "null"
            ,"Underscore":(typeof _ != "undefined") ? [_, _.VERSION] : "null"
            ,"YUI":(typeof YUI != "undefined") ? [YUI, YUI.version] : "null"
            ,"YAHOO":(typeof YAHOO != "undefined") ? [YAHOO, (typeof YAHOO.env == "object") ? YAHOO.env.getVersion('yahoo').version : 'Not too sure'] : "null"
            ,"RequireJS":(typeof requirejs != "undefined") ? [requirejs, requirejs.version] : "null"
            ,"RightJS":(typeof RightJS != "undefined") ? [RightJS, RightJS.version] : "null"
        }
        ,close : function closeLibVersionBar() {
            var libBar = document.getElementById(prometheus.id);
            libBar.parentNode.removeChild(libBar);
        }
    };

    function $tagname(tagname) {
        var nodes = document.getElementsByTagName(tagname),
            retValue = [];

        for (var i = nodes.length - 1; i >= 0; i = i - 1) {
            retValue[i] = nodes[i];
        }

        return retValue;

    };

    var highlightiframes = function(iframe) {
        if (iframe) {
            iframe.css('border', '2px solid rgb(' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ')');
        }
    };    

    function iframeCheck() {

        jQuery('iframe').each(function (index, elem) {
            prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:iframehighlight(jQuery(elem));">'+nodes.length+' iframe elements found </li>';
        });

    };
    iframeCheck();
    
    for (var key in prometheus.libs) {
        if (prometheus.libs[key] != "null") {
            prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px;">';
            prometheus.htmlcontent += key + ' - ';
            prometheus.htmlcontent += prometheus.libs[key][1];
            prometheus.htmlcontent += '</li>';
            console.info(key);
            console.info(prometheus.libs[key]);
        }
    }    
    
    var elm = document.createElement("div"),
        exitelm = document.createElement("div");
    elm.id = prometheus.id;
    exitelm.id = 'elmclose';
    elm.setAttribute("style",'background: #F0F0F7; border-right: 1px solid #AAA5A5; height: 100%; width: 250px; position: fixed; left: 0px; z-index: 99999;');
    exitelm.setAttribute("style", 'cursor: pointer; font-weight: bold; font-size: 20px; color: #000000; position: absolute; right: 0px; top: 0px; width: 20px; height: 20px;')
    elm.innerHTML = '<h2 style="width: 100%; margin: 10px 0px 20px 10px; font-size: 20px;">Feasal</h2><ul style="padding: 5px; margin: 0px; list-style: none;">'+prometheus.htmlcontent+'</ul>';
    exitelm.innerHTML = "X";
    exitelm.onclick = prometheus.close;
    
    if (document.body.firstChild) {
        document.body.insertBefore(elm, document.body.firstChild);
    } else {
        document.body.appendChild(elm);
    }
    
    document.getElementById(prometheus.id).appendChild(exitelm);

    feasal = {
        highlightiframes : highlightiframes
    };

    return feasal;



})();    

    