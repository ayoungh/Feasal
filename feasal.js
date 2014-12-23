(function () {   

    /*
    * Project name:  Feasal
    * Author : Anthony Young
    * Version : 0.1
    */


    //Object to hold all information
    var prometheus = {
        version : '0.1'
        ,id : 'Lib-bar'
        ,htmlcontent : ''
        ,init : function() {
            //check for jquery
            if (!window.jQuery) {
                //if no jquery include it
                document.write('<scr' + 'ipt type="text/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></sc' + 'ript>');
            }
        }
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

        // This is yields undefined behavior according to the ECMA spec
        // since this is returns a NodeList which is a host object.
        // This causes a break in IE.
        //return [].slice.call(document.getElementsByTagName(tagname));

    };

    var highlightiframes = function(iframe) {
        //still to do
        //make this work and maybe work out what type of iframes?    

        iframe.css('border', '2px solid rgb(' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ')');


        // var nodes = $tagname('iframe');

        // for (var i=0; i<nodes.length; i++) {
        //     nodes[i].border = 'red 1px dotted';
        // }
    };    

    function iframeCheck() {

        jQuery('iframe').each(function (index, elem) {

            prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:iframehighlight(jQuery(elem));">'+nodes.length+' iframe elements found </li>';

            //jQuery(elem).css('border', '2px solid rgb(' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ')');
            // if (jQuery(elem).attr('class')) {

            //     prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:iframehighlight(jQuery(elem));">'+nodes.length+' iframe elements found </li>';

            //     //jQuery('#iframe_container #info').append('<tr><td style="text-align:center;">' + index + '</td><td style="padding:0 10px;">.' + jQuery(elem).attr('class') + '</td><td style="padding:0 10px;">' + jQuery(elem).attr('src') + '</td></tr>');
            // } else if (jQuery(elem).attr('id')) {

            //     prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:iframehighlight(jQuery(elem));">'+nodes.length+' iframe elements found </li>';    

            //     //jQuery('#iframe_container #info').append('<tr><td style="text-align:center;">' + index + '</td><td style="padding:0 10px;">#' + jQuery(elem).attr('id') + '</td><td style="padding:0 10px;">' + jQuery(elem).attr('src') + '</td></tr>');
            // }
        });

        // var nodes = $tagname('iframe');
        // if(nodes.length>0)
        //   prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:iframehighlight();">'+nodes.length+' iframe elements found </li>';

    };    

    var mediaQ = {
        get : function() {
            var sts = document.styleSheets;
            var result = [];
            for (var i = 0; i < sts.length; i++) {
                var st = sts[i];
                if (typeof sts[i].href != undefined && sts[i].href) {
                    console.info('get stylesheets: ',sts[i].href.match(/\w*\.css/));
                    mediaQ.parseExternalCSS(sts[i].href.match(/\w*\.css/))
                }
            }
        },
        parseExternalCSS : function parseExternalCSS(url) {
            // Incrementing counter value
            this.externalCSSsToParse++;

            var cssReq = new XMLHttpRequest;
            cssReq.onload = function (event) {
                var data = event.target.responseText;
                if (data) {
                    var mqs = data.match(/@media[\s\S]*?\{/gim);
                    if (mqs && mqs.length) {
                        prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: #ffffff;">Media Queries found:</li>';           
                    }
                    for (var i in mqs) {
                        console.log('parsecssfunc: ', mqs[i].toString());
                        prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: #ffffff;">'+mqs[i].toString()+'</li>';
                    }
                }
            }.bind(this);

            cssReq.onerror = function (event) {
                console.error('Error fetching css:', event.target.statusText);
            }.bind(this);

            cssReq.onloadend = function () {
                this.externalCSSsToParse--;
                if (this.externalCSSsToParse == 0)
                    this.showResults();

            }.bind(this);

            cssReq.open('GET', url, true);
            cssReq.send();
        }

    };

    mediaQ.get();

    var iframes = {
        check : function() {

            var iframesFound = 0;

            jQuery('iframe').each(function (index, elem) {
                if (jQuery(elem).is(':visible') ) {
                    jQuery(elem).addClass('iframefounditem');
                    iframesFound++
                }
            });

            prometheus.htmlcontent += '<li class="iframesfound" style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" >'+iframesFound+' iframes found '+  (iframesFound > 1) ? iframesFound+" iframes visible": "" +' </li>'; //onclick="javascript:iframehighlight();"

            // var nodes = $tagname('iframe');
            // if(nodes.length>0)
            //     prometheus.htmlcontent += '<li style="width: 100%; margin: 10px; font-weight bold; font-size: 14px; color: red;" onclick="javascript:feasal.highlightiframes();">'+nodes.length+' iframe elements found </li>';

        },
        highlight : function() {

            jQuery('.iframefounditem').css('border', '2px solid rgb(' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ')');

            //still to do
            //make this work and maybe work out what type of iframes?    
            // var nodes = $tagname('iframe');
            // for (var i=0; i<nodes.length; i++) {
            //     nodes[i].border = 'red 1px dotted';
            // }
        }
    }

    iframes.check();

    //set up a iframes highlight
    jQuery('li.iframesfound').on('click', function() {

        if (jQuery('.iframefounditem').is(':visible')) {
            jQuery('.iframefounditem').css('border', '2px solid rgb(' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ',' + Math.round(255 * Math.random()) + ')');        
        }
    });


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
        elm.setAttribute("style",'background: rgba(26, 26, 26, 0.85); height: 100%; width: 250px; position: fixed; left: 0px; top: 0px; z-index: 99999; color: #ffffff');
        exitelm.setAttribute("style", 'cursor: pointer; font-weight: bold; font-size: 20px; color: #ffffff; position: absolute; right: 0px; top: 0px; width: 20px; height: 20px;')
        elm.innerHTML = '<h2 style="color: #ffffff; width: 100%; margin: 10px 0px 20px 10px; font-size: 20px;">Feasal</h2><ul style="padding: 5px; margin: 0px; list-style: none;">'+prometheus.htmlcontent+'</ul>';
        exitelm.innerHTML = "X";
        exitelm.onclick = prometheus.close;
    
    if (document.body.firstChild) {
        document.body.insertBefore(elm, document.body.firstChild);
    } else {
        document.body.appendChild(elm);
    }
    
    document.getElementById(prometheus.id).appendChild(exitelm);

    window.feasal = (function(){
        return { highlightiframes : iframes.highlight }
    })();

    


/////////////////////////////////////// - help from a friend with something similar

if (false) {
    jQuery('<div id="iframe_container" style="position:fixed;top:0;left:0;z-index:20;width:auto;height:auto;background:rgba(0,0,0,0.5);color:#fff;"><a id="close" style="display:block;float:right;color:#fff;text-decoration:none;" href="#">Close</a><h3>iframes found on this page:</h3><table id="info" style="font-size:.9em;"><tr><th style="text-align:center;">index</th><th style="text-align:center;">Class/Id</th><th style="text-align:center;">Source</th></tr></table><p>AJAX info:</p><p id="ajax_info" style="background: #FF00F4;"></p><p>XMLHTTP info:</p><p id="xmlhttp_info" style="background: #9F00FF;"></p><p>.NET ajax info:</p><p id="msajax_info" style="background: #f00;"></p></div>').appendTo('body');

    //iframes

    jQuery('#iframe_container #info').append('<tr><td style="text-align:center;">jQuery</td>' + '' + '<td style="padding:0 10px;"></td>' + '' + '<td style="padding:0 10px;">' + jQuery.fn.jquery + '</td></tr>');

    jQuery(document).ajaxComplete(function (a, b, c, d) {
        console.log('a: %c %s', 'background: red; color: white; padding: 3px', a);
        console.log('b: %c %s', 'background: green; color: white; padding: 3px', b);
        console.log('c: %c %s', 'background: blue; color: white; padding: 3px', c);
        console.log('d: %c %s', 'background: orange; color: white; padding: 3px', d);
        console.log(a,b,c,d);
        console.log(c.url);
        jQuery('#iframe_container #ajax_info').html('');
        jQuery('#iframe_container #ajax_info').append('URL: ' + c.url + '<br />');
        console.info(c.type);
        jQuery('#iframe_container #ajax_info').append('Method: ' + c.type + '<br />');
    });

    var oldOpen = XMLHttpRequest.prototype.open;
    function onStateChange(event) {

        switch(event.target.readyState){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                switch(event.target.status){
                    case 404:
                        console.info('XMLHTTP end ERROR request: ');
                        console.info('Error responseText: ',event.target.responseText);
                        break;
                    case 200:
                        var HTMLcontents = event.target.responseText;
                        console.info('XMLHTTP end request: ');
                        console.info('responseURL: ',event.target.responseURL);
                        console.info('readyState: ',event.target.readyState);
                        console.info('statusText: ',event.target.statusText);
                        console.info('status: ',event.target.status);
                        console.info('timeout: ',event.target.timeout);
                        jQuery('#iframe_container #xmlhttp_info').html('');
                        jQuery('#iframe_container #xmlhttp_info').append('XMLHTTP end request data:<br />URL: ' + event.target.responseURL + '<br />' + 'readyState: ' + event.target.readyState + '<br />' + 'statusText: ' + event.target.statusText + '<br />' + 'status: ' + event.target.status + '<br />');
                        break;
                }

                break;
        }
        if(event.target.timeout != 0){
            console.info('timeout: ',event.target.timeout);
            console.info('Timeout responseText: ',event.target.responseText);
        }
    }
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        this.addEventListener("readystatechange", onStateChange);
        console.info('arguments: ',arguments);
        oldOpen.apply(this, arguments);
    };

    try
    {
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, args)
        {
            console.warn('MS AJAX callback handler EXEC', sender, args);
            jQuery('#iframe_container #msajax_info').html('');
            jQuery('#iframe_container #msajax_info').append('.NET ajax end request data:<br />Sender: ' + sender + '<br />');
            jQuery('#iframe_container #msajax_info').append('Args: ' + args + '<br />');

        });
    } catch (e) { console.error(e.message);jQuery('#iframe_container #msajax_info').append('Error: ' + e.message + '<br />'); }
    jQuery('#iframe_container h3').click(function () {
        jQuery(this).nextAll().slideToggle();
    });
    jQuery('#close').click(function () {
        jQuery('#iframe_container').remove();
    });

}






})();    

    