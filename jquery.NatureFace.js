/*!
 * jquery.NatureFace.js JavaScript Library 
 * http://jquerynatureface.ksonglover.com/
 *
 * Copyright 2003~2015, jquerynatureFace.com
 * 
 * 此程式主要用途為產生互動式web應用程式之操作介面。
 * 並搭配一些簡單的操作，就可完成一個應用程式互動介面。
 * 此程式「使用創用CC 姓名標示─非商業性─禁止改作 3.0 台灣 授權條款」
 * 如做為商業用途，請利用Paypal進行付費授權，另外任何使用請保留此註記。
 * 
 */

var NatureFaceOrig=function(){if($.event.special.target==undefined){$.extend($.event.special,{target:{listeners:[],setup:function(){var c=this,b=$(c);$.event.special.target.listeners.push(b)},teardown:function(){var c=this,b=$(c);$.event.special.target.listeners=$.grep($.event.special.target.listeners,function(e,d){return b[0]!=e[0]})}},preEnter:{listeners:[],setup:function(){var c=this,b=$(c);$.event.special.preEnter.listeners.push(b)},teardown:function(){var c=this,b=$(c);$.event.special.preEnter.listeners=$.grep($.event.special.preEnter.listeners,function(e,d){return b[0]!=e[0]})}},postEnter:{listeners:[],setup:function(){var c=this,b=$(c);$.event.special.postEnter.listeners.push(b)},teardown:function(){var c=this,b=$(c);$.event.special.postEnter.listeners=$.grep($.event.special.postEnter.listeners,function(e,d){return b[0]!=e[0]})}},preExit:{listeners:[],setup:function(){var c=this,b=$(c);$.event.special.preExit.listeners.push(b)},teardown:function(){var c=this,b=$(c);$.event.special.preExit.listeners=$.grep($.event.special.preExit.listeners,function(e,d){return b[0]!=e[0]})}},postExit:{listeners:[],setup:function(){var c=this,b=$(c);$.event.special.postExit.listeners.push(b)},teardown:function(){var c=this,b=$(c);$.event.special.postExit.listeners=$.grep($.event.special.postExit.listeners,function(e,d){return b[0]!=e[0]})}}});if($.fn.autofill==undefined){$.fn.autofill=function(c){var d={maxFontPixels:40,minFontPixels:4,innerTag:"div"};var b=$.extend(d,c);return this.each(function(){if(!$(this).is(":visible")){return}var g=parseInt($(this).css("font-size")||b.maxFontPixels);$(this).css({"line-height":""});var f=$(this).height();var e=$(this).width();$(b.innerTag,this).each(function(){fontSize=g;$(this).css({width:""});var j;var h;do{$(this).css({"font-size":fontSize+"px"});j=$(this).height();h=$(this).width();fontSize=fontSize-1}while((j>f||h>e)&&fontSize>b.minFontPixels);if($(this).parent().css("text-align")=="right"){$(this).css({left:((e-h))+"px",top:((f-j)/2)+"px"})}else{if($(this).parent().css("text-align")=="center"){$(this).css({left:((e-h)/2)+"px",top:((f-j)/2)+"px"})}else{$(this).css({left:"0px",top:((f-j)/2)+"px"})}}})})}}}function a(d,k,g,h,f,j,e,c,l,b,m){this.init(d,k,g,h,f,j,e,c,l,b,m)}a.prototype={settings:{},init:function(d,l,h,j,f,k,e,c,m,b,n,g){if(typeof d=="string"){return this.start(d,l,h,j,f,k,e,c,m,b,n,g)}else{if(typeof d=="object"){return this.start(d.theme,d.fullscreen,d.prefix,d.firsttarget,d.touch,d.top,d.left,d.width,d.height,d.rootdiv,d.zindex,d.html)}}return},start:function(f,n,h,k,e,m,d,c,o,b,p,g){var j=false;this.settings={theme:f,fullscreen:n,prefix:(h?h:""),firsttarget:((k)?k:f),touch:((typeof e!="undefined")?e:(!!("undefined"!=typeof document.documentElement.ontouchstart))),top:((m&&!n)?m:0),left:((d&&!n)?d:0),width:((c&&o&&!n)?function(){j=true;return parseInt(c)}.call():$(window).width()),height:((c&&o&&!n)?parseInt(o):$(window).height()),zindex:(p?p:1),html:g,divName:(b?b:"NatureFace_"+f),div:"#"+(b?b:"NatureFace_"+f),hasSize:j,noname:0,sizeH:1,sizeW:1,elements:{},files:[],groups:{},listeners:{},self:this,hide:false,globalLoadingTarget:"NatureFaceGlobalLoadingGlassBoard",spinners:{},loadingOpts:{lines:13,length:7,width:4,radius:10,corners:1,rotate:0,color:"#ffff00",speed:1,trail:60,shadow:false,hwaccel:false,className:"spinner",zIndex:2000000000,top:"auto",left:"auto"}};var q=this.settings;var l=$.fn.text;$.fn.extend({text:function(s){if(this.length==1&&s==undefined){if($(this).hasClass("NatureObject")){var r=$(this).children("[id$=_caption]");return r.html()}else{return l.apply(this,arguments)}}else{if(this.length>=1){return this.each(function(){if($(this).hasClass("NatureObject")){var t=$(this).children("[id$=_caption]");var u=t.html(s);if($(this).is("[autofill]")){$(this).autofill()}return u}else{return l.apply(this,arguments)}})}}}});$("body").css({margin:"0px",overflow:"hidden"});if($(q.div).length==0){$("body").append('<div id="'+q.divName+'"/>')}$(q.div).css({"-moz-user-select":"none",top:q.top,left:q.left,position:"absolute"}).append('<div id="template"/><div id="layer"/><div id="'+q.globalLoadingTarget+'"/>');$("#"+q.globalLoadingTarget,q.div).css({width:q.width+"px",height:q.height+"px",top:q.top,left:q.left,opacity:0.7,"z-index":2000000000,position:"absolute",display:"none"});$(q.div).get(0).onselectstart=function(){return false};if(q.html){this.parseHTML(q.html)}else{this.loadfile(f,q.prefix)}this.convertTags();this.initLayer().target(q.firsttarget);this.autofill();return this},loading:function(c,g,d){var e=this.settings;if(!g){g=e.globalLoadingTarget}if(window.Spinner){if(c){$("#"+g,e.div).show();if(e.spinners[g]){e.spinners[g].spin(document.getElementById(g))}else{var f=document.getElementById(g);if(d){e.spinners[g]=new Spinner(d).spin(f)}else{e.spinners[g]=new Spinner(e.loadingOpts).spin(f)}}}else{if(g==e.globalLoadingTarget){$("#"+g,e.div).hide()}if(e.spinners[g]){e.spinners[g].stop()}}}},refresh:function(){var b=this.settings;if(b.fullscreen&&b.height!=0&&b.width!=0){b.sizeH=$(window).height()/b.height;b.sizeW=$(window).width()/b.width;b.height=$(window).height();b.width=$(window).width();$("#"+b.globalLoadingTarget,b.div).css({width:b.width,height:b.height});$("[id^=_backgroupimage_]",b.div).css({width:b.width,height:b.height});$(".NatureObject").each(function(){var c={top:parseFloat($(this).css("top"))*b.sizeH,left:parseFloat($(this).css("left"))*b.sizeW,width:parseFloat($(this).css("width"))*b.sizeW,height:parseFloat($(this).css("height"))*b.sizeH};$.extend(c,{"line-height":(c.height-2),"background-position":("-"+c.left+" -"+c.top),"background-size":(b.width+"px "+b.height+"px")});$(this).css(c)})}this.autofill();return this},time:function(b,e){var d=this.settings;if(!b){return}var f=new Date().getTime();if(!console.timeCounters){console.timeCounters={}}var c="KEY"+b.toString();if(!e&&console.timeCounters[c]){return}console.timeCounters[c]=f},timeEnd:function(c){var f=this.settings;var h=new Date().getTime();if(!console.timeCounters){return}var d="KEY"+c.toString();var e=console.timeCounters[d];if(e){var g=h-e;var b=c+": "+g+"ms";delete console.timeCounters[d]}return g},script:function(c){var d=this.settings;var b=document.createElement("script");b.type="text/javascript";b.src=c;$("body").append(b)},parseHTML:function(e){var n=this.settings;e=e.replace(/\ src=\"/ig,' imgsrc="');$("#template",n.div).html(e.replace(/\<area /ig,"<div ")).hide().children("img[imgsrc]").each(function(){if($(this).is('[imgsrc^="data:image/png"]')){$(this).attr("src",$(this).attr("imgsrc")).removeAttr("imgsrc")}else{$(this).attr("src",n.currentPrefix+$(this).attr("imgsrc")).removeAttr("imgsrc")}});$("#template",n.div).children("page[imgsrc]").each(function(){$(this).attr("src",$(this).attr("imgsrc")).removeAttr("imgsrc")});if($("#template",n.div).find("debug").attr("value")=="true"){$("#template > map > div",n.div).each(function(){$(this).css({"border-style":"solid","border-width":"1px","border-color":"#0000ff"})})}if(typeof($("#layer",n.div).attr("value"))=="undefined"){if((typeof $("#template",n.div).find("layer").attr("default"))!="undefined"){$("#layer",n.div).attr("value",$("#template",n.div).find("layer").attr("default"))}else{$("#layer",n.div).attr("value","0")}}if(typeof($("#template",n.div).find("layer").attr("target"))!="undefined"){$("#layer",n.div).attr("target",$("#template",n.div).find("layer").attr("target"))}else{$("#layer",n.div).removeAttr("target")}var j=$("#template > img",n.div);if(n.fullscreen||n.hasSize){var g=j.attr("height");n.sizeH=n.height/parseInt(j.attr("height"));n.sizeW=n.width/parseInt(j.attr("width"));j.css({width:n.width+"px",height:n.height+"px"})}else{$("#"+n.globalLoadingTarget,n.div).css({width:parseInt(j.attr("width"))+"px",height:parseInt(j.attr("height"))+"px"})}var f="_backgroupimage_"+(n.zindex++);if($("#_backgroupimage_",n.div).length==0){f="_backgroupimage_";j.appendTo($(n.div)).attr("id",f)}else{j.appendTo($(n.div)).attr("id",f).hide()}var m=$("#"+f,n.div).attr("src");var b=m.substring(0,m.length-4);var h=m.substring(b.length);var k=b+".mouseover"+h;var c=b+".mousedown"+h;var d=((typeof $("#"+f,n.div).attr("mousedown"))=="undefined")?false:true;var l=((typeof $("#"+f,n.div).attr("mouseover"))=="undefined")?false:true;$("#template > map > div",n.div).remove().appendTo(n.div).each(function(){var s=false;if((typeof $(this).attr("href"))=="undefined"){s="Unknow"+n.noname;n.noname=n.noname+1}else{s=$(this).attr("href")}$(this).attr("id",s.replace(".","_")).addClass("NatureObject");var u=n.elements[$(this).attr("id")]={};u.imgsrc=m;u.imgsrc_over=k;u.imgsrc_down=c;u.imgsrc_down=c;u.mousedown=d;u.mouseover=l;if((typeof $(this).attr("target"))=="undefined"){if(typeof($("#layer",n.div).attr("target"))!="undefined"){$(this).attr("target",$("#layer",n.div).attr("target"))}}if((typeof $(this).attr("layer"))=="undefined"){if(typeof($("#template",n.div).find("layer").attr("default"))!="undefined"){$(this).attr("layer",$("#template",n.div).find("layer").attr("default"))}}var r=$(this).attr("coords").split(",");r[0]=parseInt(r[0]*n.sizeW);r[1]=parseInt(r[1]*n.sizeH);r[2]=parseInt(r[2]*n.sizeW);r[3]=parseInt(r[3]*n.sizeH);var o=(r[2]-r[0])+"";var p=(r[3]-r[1])+"";$(this).css({position:"absolute",left:r[0]+"px",top:r[1]+"px",width:o+"px","line-height":(p-2)+"px",height:p+"px",overflow:"hidden","z-index":n.zindex++});if((typeof $(this).attr("font"))!="undefined"){$(this).css("font-family",$(this).attr("font"))}if((typeof $(this).attr("size"))!="undefined"){$(this).css("font-size",parseInt($(this).attr("size"))+"px")}if((typeof $(this).attr("color"))!="undefined"){$(this).css("color",$(this).attr("color"))}var v=$(this).attr("align");if(typeof v=="undefined"){$(this).css({"text-align":"left",valign:"middle"})}else{if(v=="topcenter"){$(this).css({"text-align":"center",valign:"text-top"})}else{if(v=="topleft"){$(this).css({"text-align":"left",valign:"text-top"})}else{if(v=="topright"){$(this).css({"text-align":"right",valign:"text-top"})}else{if(v=="middlecenter"){$(this).css({"text-align":"center",valign:"middle"})}else{if(v=="middleleft"){$(this).css({"text-align":"left",valign:"middle"})}else{if(v=="middleright"){$(this).css({"text-align":"right",valign:"middle"})}else{if(v=="bottomcenter"){$(this).css({"text-align":"center",valign:"text-bottom"})}else{if(v=="bottomleft"){$(this).css({"text-align":"left",valign:"text-bottom"})}else{if(v=="bottomright"){$(this).css({"text-align":"right",valign:"text-bottom"})}}}}}}}}}}$(this).removeAttr("font").removeAttr("size").removeAttr("color").removeAttr("coords").removeAttr("shape").removeAttr("href");$(this).css({"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","-webkit-box-shadow":"none","-webkit-backface-visibility":"hidden"});if((typeof $(this).attr("group"))!="undefined"){var q=(typeof($(this).attr("rows"))=="undefined")?1:$(this).attr("rows");var t=(typeof($(this).attr("cols"))=="undefined")?1:$(this).attr("cols");n.self.groupResize($(this).attr("group"),q,t,$(this))}else{n.self.convertButton($(this));$(this).hide()}});$("#template > page",n.div).remove().each(function(){if(typeof($(this).attr("src"))!="undefined"){if($(this).attr("prefix")){var o=n.currentPrefix;n.self.loadfile($(this).attr("src"),$(this).attr("prefix"));n.currentPrefix=o}else{n.self.loadfile($(this).attr("src"),n.currentPrefix)}}});$("#template",n.div).empty();return n.self},groupResize:function(c,r,n,q){var t=this.settings;var g="group_"+c+"_div";var k=g+"_container";var o=(typeof q=="undefined")?$("#"+k,t.div).css("top"):parseInt(q.css("top"));var f=(typeof q=="undefined")?$("#"+k,t.div).css("left"):parseInt(q.css("left"));var d=(typeof q=="undefined")?$("#"+k,t.div).width():q.width();var p=(typeof q=="undefined")?$("#"+k,t.div).height():q.height();var m=(typeof q=="undefined")?$("#"+k,t.div).attr("layer"):q.attr("layer");q=(typeof q=="undefined")?$("div[group="+c+"]","#"+k).first():q;$("#"+k,t.div).remove();$(t.div).append('<div id="'+k+'" style="display:none; position: absolute; overflow-y: hidden; overflow-x: hidden;" groupname="'+c+'" ><ul style="position: absolute; margin: 0 0 0 0;margin: 0; padding: 0"><li id="'+g+'" style="float: left; list-style-type: none;  margin: 0 0px 0 0;"></li></ul></div>');$("#"+g,t.div).css({left:"0px",top:"0px"}).css("z-index",t.zindex++);$("#"+k,t.div).css({left:f,top:o}).attr("layer",m).css("z-index",t.zindex++);for(var l=0;l<r;l++){for(var h=0;h<n;h++){var e=q.clone(true);e.css({top:p*l,left:d*h});e.appendTo($("#"+g,t.div));e.attr("id",c+"_"+(l*n+h));e.removeAttr("cols").removeAttr("layer").removeAttr("rows").removeAttr("opacity").removeClass("NatureObject").attr("groupid",g)}}var b=$("#"+k,t.div);$("#"+g,t.div).attr("rows",r).attr("cols",n).css("height",(p*r)+"px").css("width",(d*n)+"px");b.css("height",(p*r)+"px").css("width",(d*n)+"px").addClass("NatureObject NatureGroupObject").attr("layer",q.attr("layer"));q.remove()},loadfile:function(e,d){var c=this.settings;c.currentPrefix=d;var b=c.currentPrefix+e+".html";if($.inArray(b,c.files)!=-1){return this}c.files.push(b);$.ajax({url:b,dataType:"html",async:false,error:function(f){},success:function(f){c.self.parseHTML(f)}});c.self.script(c.currentPrefix+e+".js");return c.self},istouch:function(){return this.settings.touch},convertButton:function(d){var k=this.settings;var b=d.attr("id");if(d.hasClass("marquee")||d.hasClass("video")||d.hasClass("player")||d.hasClass("iframe")||d.hasClass("image")||d.hasClass("input")||d.hasClass("textarea")||d.hasClass("flash")){return k.self}var l=k.elements[d.attr("id")];if((typeof d.attr("opacity"))!="undefined"){var g=d.attr("opacity").split(",");for(var h=0;h<3;h++){if(h<g.length&&parseInt(g[h])>=1){g[h]=0.99}else{if(h>=g.length-1){g.push(g[0])}}}l.opacity=g}else{l.opacity=[0.99,0.99,0.99]}d.removeAttr("opacity").css("opacity",l.opacity[0]);if(!(d.hasClass("label"))){d.css("background-position","-"+d.css("left")+" -"+d.css("top"));if(k.fullscreen||k.hasSize){d.css("background-size",k.width+"px "+k.height+"px")}d.css("background-image","url("+l.imgsrc+")")}d.append('<div id="'+b+'_caption" style="position:absolute;'+d.attr("textstyle")+'"/>');var f=$("#"+b+"_caption",k.div);f.css({left:"5px",top:"0px",width:d.width()-10+"px"}).show();if((typeof d.attr("value"))!="undefined"){d.text(d.attr("value"))}if(d.hasClass("label")){d.click(function(){if(typeof($(this).attr("target"))!="undefined"){k.self.target($(this).attr("target"))}})}if(d.hasClass("label")||d.hasClass("background")){return k.self}var j=function(n,r,q,c){if(typeof(n.attr("layerdisable"))!="undefined"&&q!=0){var p=n.attr("layerdisable").split(",");if($.inArray(k.self.layer(),p)!=-1){return}}var m=k.elements[n.attr("id")];$("#"+k.globalLoadingTarget,k.div).show();n.css("opacity",m.opacity[q]);try{if(n.css("background-image")!="url("+m["imgsrc"+r]+")"){if((m.mouseover&&r=="_over")||(m.mousedown&&r=="_down")||(r=="")){n.css("background-image","url("+m["imgsrc"+r]+")")}}}catch(o){}$("#"+k.globalLoadingTarget,k.div).hide();if(c){if(typeof(n.attr("target"))!="undefined"){k.self.target(n.attr("target"))}n.trigger("binding")}};if(!k.touch){d.hover(function(){j($(this),"_over",1,false)},function(){j($(this),"",0,false)}).click(function(){j($(this),"_over",1,true)}).mousedown(function(){j($(this),"_down",2,false)}).mouseup(function(){j($(this),"_over",1,false)})}else{var e=function(n,m){var o=m.originalEvent.touches;for(var c=0;c<o.length;c++){}o=m.originalEvent.targetTouches;for(var c=0;c<o.length;c++){}o=m.originalEvent.changedTouches;for(var c=0;c<o.length;c++){}};d.bind("touchstart",function(m){if(m.originalEvent.touches.length>1){var n=m.originalEvent.touches;for(var c=0;c<n.length;c++){j($("#"+n[c].target.id,k.div),"",0,false)}}else{j($(this),"_down",2,false)}});d.bind("touchmove",function(c){j($(this),"",0,false)});d.bind("touchend",function(c){j($(this),"",0,true)});d.bind("touchcancel",function(c){j($(this),"",0,false)})}return k.self},convertTags:function(){var b=this.settings;var c=function(h,d,g,f){if(h.hasClass(d)){var e="<"+d+" "+g+' id="'+h.attr("id")+'"></'+d+">";h.removeAttr("id").append(e);h.children(d).attr("style",h.attr("style")).css({outline:"none","-webkit-user-modify":"read-write-plaintext-only",display:"",position:""}).attr("placeholder",h.attr("placeholder"))}};$(".video",b.div).each(function(){c($(this),"video",'playid="0" autoplay="autoplay"',"inline")});$(".iframe",b.div).each(function(){c($(this),"iframe","")});$(".image",b.div).each(function(){c($(this),"image","","inline")});$(".input",b.div).each(function(){c($(this),"input","")});$(".textarea",b.div).each(function(){c($(this),"textarea")});return b.self},initLayer:function(){var b=this.settings;$("div.NatureObject",b.div).each(function(){if(typeof($(this).attr("layer"))=="undefined"||$(this).attr("layer")==""){$(this).show();$(this).trigger("show");$(this).removeAttr("layer")}});return b.self},show:function(){var b=this.settings;b.hide=false;$(b.div).show();this.target(this.layer())},hide:function(){var b=this.settings;$("div.NatureObject[layer]",b.div).each(function(){$(this).css("display","none");$(this).trigger("hide")});$(b.div).css("display","none");b.hide=true},layer:function(){var b=this.settings;return $("#layer",b.div).attr("value")},target:function(b){var c=this.settings;if(!this.triggerEvent("preExit",$.event.special.postExit,this.layer())){return}b=b+"";c.self.time("target ["+b+"]",true);this.triggerEvent("postExit",$.event.special.postExit,this.layer());$("#layer",c.div).attr("value",b);if(c.hide){return}this.triggerEvent("preEnter",$.event.special.preEnter,b);$("div.NatureObject[layer]",c.div).each(function(){var e=$(this).attr("layer").split(",");if($.inArray(b,e)!=-1){$(this).show();if($(this).hasClass("NatureGroupObject")){if(typeof($(this).attr("groupname"))!="undefined"){var d=$(this).attr("groupname")}}if(typeof(c.groups[d])=="object"){if(c.groups[d].refresh!=undefined){c.groups[d].refresh()}}$(this).trigger("show")}else{$(this).css("display","none");$(this).trigger("hide")}});c.self.timeEnd("target ["+b+"]");this.fireEvent("target",b);this.triggerEvent("target",$.event.special.target,b);this.triggerEvent("postEnter",$.event.special.postEnter,b);this.autofill();return c.self},eventValue:true,triggerEvent:function(d,f,c){var b=true;this.eventValue=true;try{for(var g in f.listeners){f.listeners[g].trigger(d,[this,c]);b=b&&this.eventValue}}catch(h){}return b&&d=="preExit"},fireEvent:function(d,c){var f=this.settings;if(typeof(f.listeners[d])!="undefined"){var b=f.listeners[d];for(var g in b){try{b[g](c)}catch(h){}}}},listener:function(c,e){var d=this.settings;if(typeof e=="function"){if(typeof(d.listeners[c])!="undefined"){var b=d.listeners[c];b.push(e)}else{var b=new Array();b.push(e);this.removeListener(c);d.listeners[c]=b}}},removeListener:function(c,g){var d=this.settings;if(typeof(d.listeners[c])!="undefined"){var b=d.listeners[c];if(b.length==1){delete d.listeners[c]}else{var h=new Array();for(var e in b){if(b[e]!=g){h.push(b[e])}}delete d.listeners[c];d.listeners[c]=h}}},marquee:function(c,d){var b=this.settings;var e=0;b.self.marquee.effect="fade";b.self.marquee.speed=3000;b.self.marquee.delay=1000;b.self.marquee.timeout=6000;if(typeof d=="function"){b.self.marquee.handler=d}$.ajax({url:c,dataType:"json",cache:false,async:false,handler:d,success:function(h){$(".marquee",b.div).unbind();$(".marquee",b.div).html("");b.self.marqueeItem("　");if(typeof this.handler=="function"){this.handler(h)}else{try{b.self.marquee.effect=h.effect;b.self.marquee.speed=h.speed;b.self.marquee.delay=h.delay;b.self.marquee.timeout=h.timeout}catch(j){}try{var f=h.items;if(f.length>0){for(var g=0;g<f.length;g++){b.self.marqueeItem(f[g]["msg"])}}}catch(j){}}if($(".marquee",b.div).html()==""){b.self.marqueeItem("demo")}if($(".marquee > div",b.div).length==1){$(".marquee",b.div).append($(".marquee",b.div).html())}$(".marquee",b.div).cycle({fx:b.self.marquee.effect,speed:b.self.marquee.speed,delay:b.self.marquee.delay,timeout:b.self.marquee.timeout,after:function(){e=e+1;if(e>$(".marquee > div",b.div).size()){b.self.marquee(b.self.marquee.url,b.self.marquee.handler)}}})}});return b.self},marqueeItem:function(c){var b=this.settings;if(c=="　"){}else{if(c=="demo"){$(".marquee",b.div).html("<div>\n$.NatureFace.js plugin demo.\n</div>")}else{$(".marquee",b.div).append("<div>\n"+c+"\n</div>")}}return b.self},subscribe:function(c,e,b,g){var d=this.settings;$(document).everyTime(b,c,function(){$.ajax({url:e,dataType:"json",cache:false,async:false,success:function(f){if(f.length>0){if(typeof g=="function"){g(f)}}}})});return d.self},unsubscribe:function(b){var c=this.settings;$(document).stopTime(b);return c.self},jsonListing:function(j,h,c){var q=this.settings;var n=$("#group_"+j+"_div",q.div);var f=$("[group="+j+"]:eq(0)",q.div);var k,m=parseInt(n.attr("cols"))>0?parseInt(n.attr("cols")):1;var b=$("#group_"+j+"_div_container",q.div);$('[group="'+j+'"]',q.div).filter(":not(:eq(0))").remove();f.empty();for(var o=0;o<h.length;o++){if(o>=1){k=f.clone().empty()}else{k=f}k.attr("id",f.attr("group")+"_"+o);var p=Math.ceil((o+1)/m)-1;var e=o%m;var l=(parseInt(f.css("top"))+(parseInt(f.height())*p))+"px";var d=(parseInt(f.css("left"))+(parseInt(f.width())*e))+"px";k.css({top:l,left:d});if(o!=0){k.appendTo(n)}if(typeof c=="function"){c(k,h[o])}}if(h.length>0){n.css("height",(parseInt(k.css("top"))+k.height()+1)+"px");n.parent().css("height",n.height()+1)}if(typeof(q.groups[j])=="undefined"){q.groups[j]=new iScroll(b.attr("id"),{hScrollbar:false,hScroll:false,onTouchEnd:function(){b.trigger("onTouchEnd")},onScrollEnd:function(){b.trigger("onTouchEnd")}})}q.groups[j].refresh()},listing:function(e,b,c,h,f){var d=this.settings;if(!f){f=1}$.ajax({groupname:e,url:b+f,subupdate:c,subpage:h,page:f,dataType:"json",cache:false,async:false,pureurl:b,success:function(o){var r=this.groupname;var s=$("[group="+r+"]",d.div);var u=$("#group_"+r+"_div",d.div);var g=$("#group_"+r+"_div_container",d.div);var l=this.pureurl;var j=this.page;var k=this.subupdate;var q=this.subpage;var p,t=s.last(),n=s;for(var m=0;m<o.items.length;m++){var v=o.absoluteposition+m-1;if(v>=s.length){p=t.clone().empty();p.attr("id",t.attr("group")+"_"+v);p.css({top:(parseInt(t.css("top"))+t.height())+"px",height:(parseInt(p.css("line-height"))+2)+"px"}).appendTo(u);if(typeof k=="function"){k(p,o.items[m])}}else{p=$(s[v]);if(typeof k=="function"){k(p,o.items[m])}if(v>=1){t=$("#"+$(s[v]).attr("group")+"_"+(v-1),d.div);p.css("top",parseInt(t.css("top"))+t.height())}}t=p}if(o.items.length>0){u.css("height",(parseInt(p.css("top"))+p.height()+1)+"px");u.parent().css("height",u.height()+1)}if(j<o.pagecount){g.one("onTouchEnd",function(){d.self.listing(r,l,k,q,j+1)})}if(typeof(d.groups[r])=="undefined"){d.groups[r]=new iScroll(g.attr("id"),{hScrollbar:false,hScroll:false,onTouchEnd:function(){g.trigger("onTouchEnd")},onScrollEnd:function(){g.trigger("onTouchEnd")}})}d.groups[r].refresh()}});return d.self},autofill:function(){setTimeout('$("div[autofill]", "'+this.settings.div+'").autofill()',3)},jsonTable:function(h,e,d,f,b){var o=this.settings;if(typeof(o.groups[h])!="undefined"){delete o.groups[h]}var j=$(".NatureObject[binding="+h+"\\.left]",o.div);var m=$(".NatureObject[binding="+h+"\\.right]",o.div);var k=$("[group="+h+"]",o.div);var n=k.length>0?Math.ceil(e.length/k.length):1;if(!b){b=n}var c=b>n?n:b;o.groups[h]=e;o.groups[h].subupdate=d;o.groups[h].subclear=f;o.groups[h].page=c;for(i=0;i<k.length;i++){$(k[i]).empty();var l=(c-1)*k.length+i;if(l<e.length){d($(k[i]),e[l],c,n)}else{f($(k[i]),{},c,n)}}if(j.length>0){j.unbind("binding");if(c>1){j.bind("binding",function(){var g=$(this).attr("binding");var q=g.substring(0,g.length-5);var p=o.groups[q];o.self.jsonTable(q,p,p.subupdate,p.subclear,p.page-1)})}}if(m.length>0){m.unbind("binding");if(n>c){m.bind("binding",function(){var g=$(this).attr("binding");var q=g.substring(0,g.length-6);var p=o.groups[q];o.self.jsonTable(q,p,p.subupdate,p.subclear,p.page+1)})}}},binding:function(f,b,c,e,h){var d=this.settings;if(!h){h=1}$.ajax({group:f,url:b+h,subupdate:c,subclear:e,page:h,dataType:"json",cache:false,async:false,pureurl:b,success:function(n){if(typeof(d.groups[this.group])!="undefined"){delete d.groups[this.group]}var m=$(".NatureObject[binding="+this.group+"\\.left]",d.div);var p=$(".NatureObject[binding="+this.group+"\\.right]",d.div);var o=$(".NatureObject[binding="+this.group+"\\.pageinfo]",d.div);var g=$("[group="+this.group+"]",d.div);n.url=this.pureurl;n.subupdate=this.subupdate;n.subclear=this.subclear;d.groups[this.group]=n;if(n.pagecount>1&&o.length>0){$(o).text(n.absolutepage+"頁／"+n.pagecount+"頁")}else{if(o.length>0){$(o).text("1頁／1頁")}}var l=0;for(l=0;l<n.items.length;l++){if(typeof n.subupdate=="function"){$(g[l]).empty();n.subupdate($(g[l]),n.items[l])}}for(var k=l;k<g.length;k++){if(typeof n.subclear=="function"){n.subclear($(g[k]))}}if(m.length>0){m.unbind("binding");m.bind("binding",function(){var j=$(this).attr("binding");var r=j.substring(0,j.length-5);var q=d.groups[r];d.self.binding(r,q.url,q.subupdate,q.subclear,q.absolutepage-1)})}if(p.length>0){p.unbind("binding");p.bind("binding",function(){var j=$(this).attr("binding");var r=j.substring(0,j.length-6);var q=d.groups[r];d.self.binding(r,q.url,q.subupdate,q.subclear,q.absolutepage+1)})}}});return d.self}};$.extend({NatureFace:{init:function(c,e,d,b,f){$.NatureFace=new a(c,e,d,b,f);return $.NatureFace}}})();return window.NatureFace=a};if(typeof define=="function"){define(NatureFaceOrig)}else{NatureFaceOrig()};
