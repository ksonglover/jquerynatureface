var NatureFaceOrig = function(){
	if ($.event.special.target == undefined) {
		//event defined, target
		$.extend($.event.special, {
			refresh : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.refresh.listeners.push($elem);
			        console.info("refresh(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.refresh.listeners = $.grep($.event.special.refresh.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("refresh(unbind) %o", $elem);
		    	}
			},
			target : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.target.listeners.push($elem);
			        console.info("target(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.target.listeners = $.grep($.event.special.target.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("target(unbind) %o", $elem);
		    	}
			},
			preEnter : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.preEnter.listeners.push($elem);
			        console.info("preEnter(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.preEnter.listeners = $.grep($.event.special.preEnter.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("preEnter(unbind) %o", $elem);
		    	}
			},
			postEnter : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.postEnter.listeners.push($elem);
			        console.info("postEnter(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.postEnter.listeners = $.grep($.event.special.postEnter.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("postEnter(unbind) %o", $elem);
		    	}
			},
			preExit : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.preExit.listeners.push($elem);
			        console.info("preExit(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.preExit.listeners = $.grep($.event.special.preExit.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("preExit(unbind) %o", $elem);
		    	}
			},
			postExit : {
				listeners : [],
		    	setup: function() {
			        var elem = this, $elem = $(elem);
			        $.event.special.postExit.listeners.push($elem);
			        console.info("postExit(bind) %o", $elem);
		    	},
		    	teardown: function() {
		        	var elem = this, $elem = $(elem);
					$.event.special.postExit.listeners = $.grep($.event.special.postExit.listeners, function(value, index) {
		  				return $elem[0] != value[0];
					});
			        console.info("postExit(unbind) %o", $elem);
		    	}
			}
		});
			
		if ($.fn.autofill == undefined)
		    $.fn.autofill = function(options) {
		        var defaults = {
		            maxFontPixels: 40,
		            minFontPixels: 4,
		            innerTag: 'div'
		        };
		        var Opts = $.extend(defaults, options);
		        return this.each(function() {
		        	if(!$(this).is(":visible")) return;
		            var pfontSize = parseInt($(this).css("font-size") || Opts.maxFontPixels);
		            
		            console.info("id", $(this).attr("id"), $(Opts.innerTag, this).size());
		            if($(Opts.innerTag, this).size()==0){//只有自已的html文字
		            	if(!$(this).data("orig")){ //記錄過，就不用再存
			            	$(this).data("orig", {
			            		top : parseFloat($(this).css("top")),
			            		left : parseFloat($(this).css("left")),
			            		w : $(this).width(),
			            		h : $(this).height()
			            	});
		            	}
		            	var o = $(this).data("orig");
		            	var fontSize = pfontSize;
		            	var textHeight;
			            var textWidth;
						$(this).css({"width":'',"height":'', "line-height": ""});
			            do {
			                $(this).css({'font-size':fontSize+"px"});
			                textHeight = $(this).height();
			                textWidth = $(this).width();
			                fontSize = fontSize - 1;
			            } while ((textHeight > o.h || textWidth > o.w) && fontSize > Opts.minFontPixels);
			            
			            //恢復大小
			            $(this).css({
		            		width : o.w,
		            		height : o.h + 10
			            });
			            
		            }else{
		            	$(this).css({"line-height": ""});
			            var maxHeight = $(this).height();
			            var maxWidth = $(this).width();
			            $(Opts.innerTag, this).each(function(){
			            	var fontSize = pfontSize;
				            $(this).css({"width":''});
				            var textHeight;
				            var textWidth;
				            do {
				                $(this).css({'font-size':fontSize+"px"});
				                textHeight = $(this).height();
				                textWidth = $(this).width();
				                fontSize = fontSize - 1;
				            } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > Opts.minFontPixels);
				            if ($(this).parent().css("text-align") == "right"){
				            	$(this).css({left:((maxWidth-textWidth))+"px", top:((maxHeight-textHeight)/2)+"px"});
				            }else if ($(this).parent().css("text-align") == "center"){
				            	$(this).css({left:((maxWidth-textWidth)/2)+"px", top:((maxHeight-textHeight)/2)+"px"});
				            }else{ //center or not defined
				            	$(this).css({left:"0px", top:((maxHeight-textHeight)/2)+"px"});
				            }
			            });
		            }

		        });
		    };
	
		/*try{
			//set google analytics track
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-38633462-1']);
			_gaq.push(['_trackPageview']);
		
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		}catch(e){
		}*/
		
	}
	
	
	function NatureFace(opt, fullscreen, prefix, firsttarget, touch, top, left, width, height, rootdiv, zindex) {
		this.init(opt, fullscreen, prefix, firsttarget, touch, top, left, width, height, rootdiv, zindex);
	}
	
	NatureFace.prototype = {
		settings : {},
		init: function(opt, fullscreen, prefix, firsttarget, touch, top, left, width, height, rootdiv, zindex, html) {
			if (typeof opt == "string"){
				return this.start(opt, fullscreen, prefix, firsttarget, touch, top, left, width, height, rootdiv, zindex, html);
			}else if  (typeof opt == "object"){
				return this.start(opt.theme, opt.fullscreen, opt.prefix, opt.firsttarget, opt.touch, opt.top, opt.left, opt.width, opt.height, opt.rootdiv, opt.zindex, opt.html, opt.pages, opt.disablejs, opt.transparent);
			}
			return;
		},
		start: function(theme, fullscreen, prefix, firsttarget, touch, top, left, width, height, rootdiv, zindex, html, pages, disablejs, transparent) {
			var hasSize = false;
			this.settings = {
				//parameters
				theme	 		: theme,
				fullscreen	 	: fullscreen,
				prefix			: (prefix?prefix:''),
				firsttarget		: ((firsttarget)?firsttarget:theme),
				touch			: ((typeof touch != "undefined")?touch:(!!("undefined" != typeof document.documentElement.ontouchstart))),
				top				: ((top && !fullscreen)?top:0),
				left			: ((left && !fullscreen)?left:0),
				width			: ((width && height && !fullscreen)?function(){hasSize=true;return parseInt(width);}.call():$(window).width()), 
				height			: ((width && height && !fullscreen)?parseInt(height):$(window).height()), 
				zindex			: (zindex?zindex:1),
				html				: html,
				pages			: pages,
				disablejs		: disablejs,
				transparent		: (transparent?transparent:false),
				
				//internal parameters 
				divName			: (rootdiv?rootdiv:"NatureFace_" + theme),
				div				: '#'+(rootdiv?rootdiv:"NatureFace_" + theme),
				hasSize			: hasSize,
				noname			: 0,
				sizeH			: 1, //全螢幕比例
				sizeW			: 1,
				elements		: {},
				files			: [],
				groups 			: {},
				listeners		: {},
				self			: this,
				hide			: false,
				
				//loading div parameters
				globalLoadingTarget : "NatureFaceGlobalLoadingGlassBoard",
				spinners : {},
				loadingOpts : {
					  lines: 13, // The number of lines to draw
					  length: 7, // The length of each line
					  width: 4, // The line thickness
					  radius: 10, // The radius of the inner circle
					  corners: 1, // Corner roundness (0..1)
					  rotate: 0, // The rotation offset
					  color: '#ffff00', // #rgb or #rrggbb
					  speed: 1, // Rounds per second
					  trail: 60, // Afterglow percentage
					  shadow: false, // Whether to render a shadow
					  hwaccel: false, // Whether to use hardware acceleration
					  className: 'spinner', // The CSS class to assign to the spinner
					  zIndex: 2000000000, // The z-index (defaults to 2000000000)
					  top: 'auto', // Top position relative to parent in px
					  left: 'auto' // Left position relative to parent in px
				}		
			};
	
			var s = this.settings;
	
			//must added <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> to html 
			console.info("display resolution: width:" + s.width + " height:" + s.height);
	
			$("body").css({margin: "0px", overflow:'hidden'});
	
			//會用到的javascript， 動態載入
		        //this.script("js/$.NatureFace-3party.js"); //loading 3party libary
	
			//加入div
			if ($(s.div).length==0){
				$("body").append('<div id="'+ s.divName +'"/>');
			}
			
			$(s.div).css({"-moz-user-select":"none", top:s.top, left:s.left, position:"absolute"}) //禁止fx選取文字
			.append('<div id="template"/><div id="layer"/><div id="'+ s.globalLoadingTarget +'"/>');
	
			$("#" + s.globalLoadingTarget, s.div).css({
				width:s.width+"px",height:s.height+"px", top:s.top, left:s.left,
				opacity:0.7,"z-index":2000000000,position:"absolute",display:"none"
			});
			
			$(s.div).get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	
			if(s.html){
				console.info("Read HTML parameter");
				this.parseHTML(s.html);
			}else{
				if(s.pages){
					$.each(s.pages, function(index, page){
						s.self.loadfile(page, s.prefix);
					});					
				}else{
					this.loadfile(theme, s.prefix);	
				}
			}
			
			this.convertTags();
			
			this.initLayer().target(s.firsttarget); //show allways element (layer="") and show theme
			this.autofill();
			return this;							
		}, 
		loading:function(b, target, opt){
			var s = this.settings;
			if (!target)
				target = s.globalLoadingTarget;
			if (window.Spinner){
				if (b){
					$("#" + target, s.div).show();
					if (s.spinners[target]){ //continue
						s.spinners[target].spin(document.getElementById(target));
					}else{ //new loading
						var targetobj = document.getElementById(target);
						if (opt)
							s.spinners[target] = new Spinner(opt).spin(targetobj);
						else
							s.spinners[target] = new Spinner(s.loadingOpts).spin(targetobj);
					}
				}else{
					if (target == s.globalLoadingTarget)
						$("#" + target, s.div).hide();
					if (s.spinners[target]){ //stop
						s.spinners[target].stop();
					}
				}
			}
		},
		refresh: function(){
			var s = this.settings;
			
			if(s.fullscreen && s.height!=0 && s.width!=0){
				s.sizeH = $(window).height() / s.height;
				s.sizeW = $(window).width() / s.width;
				s.height = $(window).height();
				s.width =$(window).width();
				
				$("#"+s.globalLoadingTarget, s.div).css({
					width:s.width,
					height:s.height
				});
				
				$("[id^=_backgroupimage_]", s.div).css({
					width:s.width,
					height:s.height
				});

				var resize = function(){
					var coords = {
						top : parseFloat($(this).css("top")) * s.sizeH,
			            left : parseFloat($(this).css("left")) * s.sizeW,
			            width : parseFloat($(this).css("width")) * s.sizeW,
			            height : parseFloat($(this).css("height")) * s.sizeH
					};
					
					$.extend(coords, {
						"line-height" : (coords.height -2) + "px",
						"background-position" : (s.transparent ? "" : ("-" + coords.left + "px -" + coords.top + "px")),
						"background-size" : (s.transparent ? "" : (s.width+"px " + s.height+"px"))
					});
					//console.info("coords:", coords);
					if($(this).hasClass("NatureGroupObject")){
						$.extend(coords, {"line-height":""});
					}
					$(this).css(coords);
				};
				
				$(".NatureObject:visible", s.div).each(resize);
				
				$(".NatureObject:hidden", s.div).each(resize);
				
				this.triggerEvent("refresh", $.event.special.refresh, this.layer());
			}
			this.autofill();
			return this;
		},
		time: function(name, reset) {
			var s = this.settings;
			if (!name) {
				return;
			}
			var time = new Date().getTime();
			if (!console.timeCounters) {
				console.timeCounters = {};
			};
			var key = "KEY" + name.toString();
			if (!reset && console.timeCounters[key]) {
				return;
			}
			console.timeCounters[key] = time;
		},
		timeEnd: function(name){
			var s = this.settings;
			var time = new Date().getTime();
			if (!console.timeCounters) {
				return;
			}
			var key = "KEY" + name.toString();
			var timeCounter = console.timeCounters[key];
			if (timeCounter) {
				var diff = time - timeCounter;
				var label = name + ": " + diff + "ms";
				console.info(label);
				delete console.timeCounters[key];
			}
			return diff;
		},
		script: function(url) {
			var s = this.settings;
			if(s.disablejs) return;
			var script=document.createElement('script');
			script.type='text/javascript';
			script.src=url;
			try{
				$("body").append(script);	
			}catch(e){}
		}, 
		parseHTML : function(data){
			var s = this.settings;
			data = data.replace(/\ src=\"/ig, " imgsrc=\"");
			$("#template", s.div).html(data.replace(/\<area /ig, '<div ')).hide()
				.children("img[imgsrc]")
				.each(function(){
					if($(this).is('[imgsrc^="data:image/png"]')){
						$(this).attr("src", $(this).attr("imgsrc")).removeAttr("imgsrc");
					}else{
						$(this).attr("src", s.currentPrefix + $(this).attr("imgsrc")).removeAttr("imgsrc");
					}
			});
		
			$("#template", s.div).children("page[imgsrc]").each(function(){
				$(this).attr("src", $(this).attr("imgsrc")).removeAttr("imgsrc");
			});
	
			//設定第一頁的layer值，第二頁就無需再設定
			if(typeof ($("#layer", s.div).attr("value")) == "undefined"){
				if ((typeof $("#template", s.div).find("layer").attr("default")) != 'undefined'){
					$("#layer", s.div).attr("value",$("#template", s.div).find("layer").attr("default"));
				}else{
					$("#layer", s.div).attr("value","0");
				}
			}
	
			if(typeof ($("#template", s.div).find("layer").attr("target")) != 'undefined'){
				 $("#layer", s.div).attr("target",$("#template", s.div).find("layer").attr("target"));
			}else{
				 $("#layer", s.div).removeAttr("target");
			}
	
			var imagediv = $("#template > img", s.div);//重新測量比例
			if (s.fullscreen || s.hasSize){
				var checkheight = imagediv.attr("height"); //fixed jquery 1.4 bug
				s.sizeH = s.height / parseInt(imagediv.attr("height"));
				s.sizeW = s.width / parseInt(imagediv.attr("width"));
				imagediv.css({width:s.width+"px",height:s.height+"px"});
			}else{
				$("#" + s.globalLoadingTarget, s.div).css({width:parseInt(imagediv.attr("width"))+"px",height:parseInt(imagediv.attr("height"))+"px"});
			}
	
			var backgroupID = "_backgroupimage_" + (s.zindex++);
			if ($("#_backgroupimage_", s.div).length==0){
				backgroupID = "_backgroupimage_";
				imagediv.appendTo($(s.div)).attr("id",backgroupID);
			}else{
				imagediv.appendTo($(s.div)).attr("id",backgroupID).hide();
			}
			
			//image source define
			var imgsrc = $("#" + backgroupID, s.div).attr("src");
			var filename = imgsrc.substring(0,imgsrc.length-4);
			var filetype = imgsrc.substring(filename.length);
			var imgsrc_over = filename + ".mouseover" + filetype ;
			var imgsrc_down = filename + ".mousedown" + filetype ;
			
			var mousedown = ((typeof $("#" + backgroupID, s.div).attr("mousedown")) == 'undefined')?false:true;
			var mouseover = ((typeof $("#" + backgroupID, s.div).attr("mouseover")) == 'undefined')?false:true;
			
			//debug
			var defaultCSS ={};
			if($("#template", s.div).find("debug").attr("value")=="true"){
				$.extend(defaultCSS, {
					'border-style':"solid", 
					'border-width':"1px", 
					'border-color':"#0000ff"
				});
			}
			
			//move to document
			$("#template > map > div", s.div).remove().appendTo(s.div).each(function(){
				var strID = false;
				if ((typeof $(this).attr("href")) == 'undefined'){
					strID = "Unknow" + s.noname ;
					s.noname  = s.noname +1;
				}else{
					strID = $(this).attr('href'); 
				}
				$(this).attr("id", strID.replace('.',"_")).addClass("NatureObject");
				var e = s.elements[$(this).attr("id")] = {};
				e.imgsrc = imgsrc;
				e.imgsrc_over = imgsrc_over;
				e.imgsrc_down = imgsrc_down;
				e.imgsrc_down = imgsrc_down;
				e.mousedown = mousedown;
				e.mouseover = mouseover;
	
				//not found target, assign default value
				if ((typeof $(this).attr("target")) == 'undefined'){
					if(typeof ($("#layer", s.div).attr("target")) != "undefined"){
						$(this).attr("target", $("#layer", s.div).attr("target"));
					}
				}
				//設定此頁的內定layer(template)
				if ((typeof $(this).attr("layer")) == 'undefined'){
					if(typeof ($("#template", s.div).find("layer").attr("default")) != 'undefined'){
						$(this).attr("layer", $("#template", s.div).find("layer").attr("default")); 
					}
				}
	
				var coords  = $(this).attr("coords").split(",");
	
				//依比例取值
	            coords[0] = parseInt(coords[0] * s.sizeW);
	            coords[1] = parseInt(coords[1] * s.sizeH);
	            coords[2] = parseInt(coords[2] * s.sizeW);
	            coords[3] = parseInt(coords[3] * s.sizeH);
	
				var oWidth  = (coords[2] - coords[0]) + "";
				var oHeight = (coords[3] - coords[1]) + "";
				
				var elementCSS = $.extend({}, defaultCSS, {
					"position": "absolute",
					"left": coords[0] + "px",
					"top": coords[1] + "px",
					"width": oWidth + "px",
					"line-height": (oHeight-2) + "px", 
					"height": oHeight + "px",
					"overflow": "hidden", 
					"z-index" : s.zindex++
				});
	
				if ((typeof $(this).attr("font")) != 'undefined') $.extend(elementCSS, {"font-family" :  $(this).attr("font")});
				if ((typeof $(this).attr("size")) != 'undefined') $.extend(elementCSS, {"font-size" : parseInt($(this).attr("size"))+"px"});
				if ((typeof $(this).attr("color")) != 'undefined') $.extend(elementCSS, {"color" : $(this).attr("color")});
				var align = $(this).attr("align");
				if (typeof align == 'undefined'){
					$.extend(elementCSS, {"text-align":"left","valign":"middle"});
				}else if (align=="topcenter"){
					$.extend(elementCSS, {"text-align":"center", "valign":"text-top"});
				}else if (align=="topleft"){
					$.extend(elementCSS, {"text-align":"left", "valign":"text-top"});
				}else if (align=="topright"){
					$.extend(elementCSS, {"text-align":"right","valign":"text-top"});
				}else if (align=="middlecenter"){
					$.extend(elementCSS, {"text-align":"center","valign":"middle"});
				}else if (align=="middleleft"){
					$.extend(elementCSS, {"text-align":"left","valign":"middle"});
				}else if (align=="middleright"){
					$.extend(elementCSS, {"text-align":"right","valign":"middle"});
				}else if (align=="bottomcenter"){
					$.extend(elementCSS, {"text-align":"center","valign":"text-bottom"});
				}else if (align=="bottomleft"){
					$.extend(elementCSS, {"text-align":"left","valign":"text-bottom"});
				}else if (align=="bottomright"){
					$.extend(elementCSS, {"text-align":"right","valign":"text-bottom"});
				}
				$(this)
				.removeAttr("font")
				.removeAttr("size")
				.removeAttr("color")
				.removeAttr("coords")
				.removeAttr("shape")
				.removeAttr("href")
				.removeAttr("align");
				//特色設定，高亮度關閉，否則會手機會不清晰，搭配透明度不為1才行。
				$.extend(elementCSS, {
					'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
					'-webkit-box-shadow': 'none',
					'-webkit-backface-visibility': 'hidden'
				});
	
				$(this).css(elementCSS);
				
				//處理group
				if ((typeof $(this).attr("group")) != 'undefined'){
	                var rows = (typeof ($(this).attr("rows")) == 'undefined') ? 1 : $(this).attr("rows");
	                var cols = (typeof ($(this).attr("cols")) == 'undefined') ? 1 : $(this).attr("cols");
					s.self.groupResize($(this).attr("group"), rows, cols, $(this));
	          	}else{
					//初始化後是否要顯示, and replace all tags
					s.self.convertButton($(this));
					$(this).hide();
			  	}
			});
			$("#template > page", s.div).remove().each(function(){
				if (typeof ($(this).attr("src")) != "undefined"){
					if ($(this).attr("prefix")){
						var oldPrefix = s.currentPrefix;
						s.self.loadfile($(this).attr("src"), $(this).attr("prefix"));
						s.currentPrefix = oldPrefix;
					}else{
						s.self.loadfile($(this).attr("src"), s.currentPrefix);
					}
				}
			});
			$("#template", s.div).empty();
			return s.self;
		},//依group名稱建立矩陣，依傳入的item來決定大小及layer, 但無item時，表示由containerid來取得整個大小再細分
		groupResize: function(name, rows, cols, item){
			
			var s = this.settings;
			var groupid = "group_"+name+"_div";
	        var containerid = groupid+"_container";
	
	        var top = (typeof item == 'undefined') ? $("#"+containerid, s.div).css("top") : parseInt(item.css("top")); 
	        var left = (typeof item == 'undefined') ? $("#"+containerid, s.div).css("left") : parseInt(item.css("left"));
	        var width = (typeof item == 'undefined') ? $("#"+containerid, s.div).width() : item.width();
	        var height = (typeof item == 'undefined') ? $("#"+containerid, s.div).height() : item.height();
	        var layer = (typeof item == 'undefined') ? $("#"+containerid, s.div).attr("layer") : item.attr("layer");
	
	        //沒有item則使用group
	        item = (typeof item == 'undefined') ? $("div[group="+name+"]", "#"+containerid).first() : item;
	        
	        $("#"+containerid, s.div).remove();
	        $(s.div).append('<div id="'+ containerid + '" style="display:none; position: absolute; overflow-y: hidden; overflow-x: hidden;" groupname="' + name + '" ><ul style="position: absolute; margin: 0 0 0 0;margin: 0; padding: 0"><li id="'+ groupid + '" style="float: left; list-style-type: none;  margin: 0 0px 0 0;"></li></ul></div>');
	        $("#"+groupid, s.div).css({"left": "0px", "top": "0px"})
	        .css("z-index", s.zindex++);
	        $("#"+containerid, s.div).css({"left": left, "top": top})
	        .attr("layer", layer)
	        .css("z-index", s.zindex++);
	        //建立list矩陣
	        for(var i=0; i<rows; i++){
	        	for(var j=0; j<cols; j++){
	        		var newitem = item.clone(true);
	        		newitem.css({
	        			"top" : height * i,
	        			"left" : width * j
	        		});
	        		//newitem.css("top", height * i);
	            	//newitem.css("left", width * j);
					newitem.appendTo($("#"+groupid, s.div));
					newitem.attr("id",name+"_"+(i*cols+j));
					newitem.removeAttr("cols").removeAttr("layer")
						.removeAttr("rows").removeAttr("opacity")
						.removeClass("NatureObject").attr("groupid", groupid);
	        	}
	        }
	        var container = $("#"+containerid, s.div);
	        $("#"+groupid, s.div)
	        .attr("rows", rows)
	        .attr("cols", cols)
	    	.css("height", (height * rows)+"px")
	    	.css("width", (width * cols)+"px");
	    	container.css("height", (height * rows)+"px")
	    	.css("width", (width * cols)+"px")
	    	.addClass("NatureObject NatureGroupObject")
	    	.attr("layer", item.attr("layer"));
	    	
	    	item.remove();
	    	return container;
				
		},//讀取佈景主題檔(動態)
		loadfile: function(theme, prefix){
			var s = this.settings;
			s.currentPrefix = prefix;
			var urlfile = s.currentPrefix + theme + ".html";
			//不重覆載入檔案
			if($.inArray(urlfile,s.files)!=-1){
				return this;
			}
			console.info("loadfile:" + urlfile);
			s.files.push(urlfile);
			$.ajax({
				url: urlfile,
				dataType: "html", 
				async: false,
				error: function(data){
					console.info("invalid file status:" + data.status + " response:" + data.responseText);
				},
				success: function(data){
					s.self.parseHTML(data);
				}
			});
			//embeded javascript 
			s.self.script(s.currentPrefix + theme + ".js");
			return s.self;
		},
		istouch : function(){
			return this.settings.touch;
		},
		convertButton: function(el){
			var s = this.settings;
			var strID = el.attr('id');
	
			if(el.hasClass("marquee") || el.hasClass("video") ||el.hasClass("player") || el.hasClass("iframe") || el.hasClass("image") || el.hasClass("input") || el.hasClass("textarea") || el.hasClass("flash")){
				return s.self;
			}
	
			var setting = s.elements[el.attr("id")];
			
			//處理opacity, 只有1個，郥補上2個，如為1則設定為0.99
			if ((typeof el.attr("opacity")) != 'undefined'){
				var opacity  = el.attr("opacity").split(",");
				for(var c=0; c<3; c++){
					if (c<opacity.length && parseInt(opacity[c])>=1){
						opacity[c]=0.99;
					}else if (c>=opacity.length-1){
						opacity.push(opacity[0]);					
					}
				}
				setting.opacity = opacity;
			}else{
				setting.opacity = [0.99, 0.99, 0.99];
			}
			el.removeAttr("opacity").css("opacity", setting.opacity[0]); 
			//console.info("opacity:" + setting.opacity);
			
			//加入圖檔到Nature Object中
			if(!s.transparent){
				if(!(el.hasClass("label"))){
					el.css("background-position", "-" + el.css("left") + " -" + el.css("top"));
					if(s.fullscreen || s.hasSize)
						el.css("background-size", s.width+"px " + s.height+"px");
					el.css("background-image", "url(" + setting.imgsrc + ")");
				}
			}
			//顯示default value
			if ((typeof el.attr("value")) != 'undefined') el.text(el.attr("value"));
			
			el.removeAttr("value");
			
			//讓label也支援target動作
			if(el.hasClass("label")){
				el.click(function(){
					if(typeof ($(this).attr("target")) != "undefined"){
						s.self.target($(this).attr("target"));
					}
				});
			}
	
			//如為label, 到此為止
			if(el.hasClass("label") || el.hasClass("background")) return s.self;
	
			var switchBackgroundImage = function(el, imgsrc, opacityPos, checkTarget){
				if(typeof (el.attr("layerdisable")) != "undefined" && opacityPos !=0){
					var layers = el.attr("layerdisable").split(",");
					if($.inArray(s.self.layer(),layers)!=-1){
						return;
					}
				}
				var setting = s.elements[el.attr("id")];
				$("#"+s.globalLoadingTarget, s.div).show();
				el.css("opacity", setting.opacity[opacityPos]); 
				try{
					if (el.css("background-image")!="url(" + setting["imgsrc"+imgsrc] + ")"){
						if ((setting.mouseover && imgsrc == "_over") || (setting.mousedown && imgsrc == "_down") || (imgsrc == "")){
							if(!s.transparent){
								el.css("background-image", "url(" + setting["imgsrc"+imgsrc] + ")");
							}
						}
					}
				}catch(e){}
				$("#"+s.globalLoadingTarget, s.div).hide();
				if (checkTarget){
					if(typeof (el.attr("target")) != "undefined"){
						console.info("press [" + el.attr("id") + "] goto '" + el.attr("target")+"'.");
						s.self.target(el.attr("target"));
					}
					el.trigger("binding");
				}
			};
			
			if (!s.touch){
				//處理物件事件(hover, click），進行圖檔之切換及target的切換
				el.hover(function(){
					switchBackgroundImage($(this), "_over", 1, false);
				}, function(){
					switchBackgroundImage($(this), "", 0, false);
				}).click(function(){
					switchBackgroundImage($(this), "_over", 1, true);
				}).mousedown(function(){
					switchBackgroundImage($(this), "_down", 2, false);
				}).mouseup(function(){
					switchBackgroundImage($(this), "_over", 1, false);
				});
			}else{
				/* for test */
				var printtouch = function(action, event){
					var touches = event.originalEvent.touches;
	        		for(var i=0; i<touches.length; i++){
						console.info(action + "[touches]:" + i + " > " + touches[i].target.id);
	        		}
					touches = event.originalEvent.targetTouches;
	        		for(var i=0; i<touches.length; i++){
						console.info(action + "[targetTouches]:" + i + " > " + touches[i].target.id);
	        		}
					touches = event.originalEvent.changedTouches;
	        		for(var i=0; i<touches.length; i++){
						console.info(action + "[changedTouches]:" + i + " > " + touches[i].target.id);
	        		}
				};
				el.bind("touchstart",function(event){
					//printtouch("touchstart", event);
					if (event.originalEvent.touches.length>1){//發現是多點，要全部恢復 
						var touches = event.originalEvent.touches;
	        			for(var i=0; i<touches.length; i++){
							switchBackgroundImage($("#"+touches[i].target.id, s.div), "", 0, false); 
	        			}
					}else{
						switchBackgroundImage($(this), "_down", 2, false);
					}
				});
				el.bind("touchmove",function(event){
					//printtouch("touchmove", event);
					switchBackgroundImage($(this), "", 0, false);
				});
				el.bind("touchend",function(event){
					//printtouch("touchend", event);
					switchBackgroundImage($(this), "", 0, true);
				});
				el.bind("touchcancel",function(event){
					//printtouch("touchcancel", event);
					switchBackgroundImage($(this), "", 0, false);
				});
			}
			
			return s.self;
		},
		convertTags: function(){
			var s = this.settings;
			var replaceTag = function(o, tag, code, style){
				if (o.hasClass(tag)){
					var el ='<' + tag + ' ' + code + ' id="' + o.attr("id") + '"></' + tag + ">"; 
					o.removeAttr("id").append(el);
					//保留所有的style
					o.children(tag).attr("style", o.attr("style")) 
					//display及position移除，加入input通透style
					.css({"outline":"none","-webkit-user-modify":"read-write-plaintext-only", "display":"","position":""}) 
					//input專用attr
					.attr("placeholder", o.attr("placeholder")); 
				}
			};
	
			$(".video", s.div).each(function(){replaceTag($(this), 'video', 'playid="0" autoplay="autoplay"',"inline");});
			$(".iframe", s.div).each(function(){replaceTag($(this), 'iframe', '');});
			$(".image", s.div).each(function(){replaceTag($(this), 'image','',"inline");});
			$(".input", s.div).each(function(){replaceTag($(this), 'input', '');});
			$(".textarea", s.div).each(function(){replaceTag($(this), 'textarea');});
			//$(".flash").each(function(){
			//	s.selfscript("js/$.flash.js");
			//});
			return s.self;
		},
		initLayer: function(){ //秀出永顯示的元件
			var s = this.settings;
			$("div.NatureObject", s.div).each(function(){
				if (typeof ($(this).attr("layer")) == 'undefined' || $(this).attr("layer") == ''){
					$(this).show();
					$(this).trigger("show");
					$(this).removeAttr("layer");
				}
			});
			return s.self;
		},
		show: function(){
			var s = this.settings;
			s.hide = false;
			$(s.div).show();
			this.target(this.layer());
		},
		hide: function(){
			var s = this.settings;
			$("div.NatureObject[layer]", s.div).each(function(){
				$(this).css("display","none");
				$(this).trigger("hide");
			});
			$(s.div).css("display","none");
			s.hide = true;
		},
		layer: function(){
			var s = this.settings;
			return $("#layer", s.div).attr("value");
		},
		target: function(layer){
			var s = this.settings;
	
			//離開目前的layer前，有回傳值為true才可離開
			if (!this.triggerEvent("preExit", $.event.special.preExit, this.layer())) return;
			layer = layer+"";
			s.self.time("target [" + layer + "]",true);
	
			//確定離開啦
			this.triggerEvent("postExit", $.event.special.postExit, this.layer());
			$("#layer", s.div).attr("value", layer);
			if (s.hide) return;
	
			//進入layer前（尚未秀出)
			this.triggerEvent("preEnter", $.event.special.preEnter, layer);
			$("div.NatureObject[layer]", s.div).each(function(){
				var layers = $(this).attr("layer").split(",");
				if($.inArray(layer,layers)!=-1){
					$(this).show();
					if($(this).hasClass("NatureGroupObject"))
					 	if (typeof ($(this).attr("groupname")) != 'undefined')
					 		var group = $(this).attr("groupname");
					 		if (typeof (s.groups[group]) == 'object'){
								if (s.groups[group].refresh != undefined) s.groups[group].refresh();
							}
					$(this).trigger("show");
				}else{
					$(this).css("display","none");
					$(this).trigger("hide");
				}
			});
			s.self.timeEnd("target [" + layer + "]");
			this.fireEvent("target", layer);
			this.triggerEvent("target", $.event.special.target, layer);
			this.triggerEvent("postEnter", $.event.special.postEnter, layer);
			this.autofill();
			return s.self;
		},
		eventValue : true,
		triggerEvent: function(key, event, layer){
			var isOK = true;
			this.eventValue = true;
			try{
				for(var listener in event.listeners){
		  			event.listeners[listener].trigger(key, [this, layer]);
		  			isOK = isOK && this.eventValue;
				};
			}catch(e){}
			return isOK && key == "preExit";
		},
		fireEvent: function(key, args){
			var s = this.settings;
	        if (typeof (s.listeners[key]) != "undefined"){
	                var funcs = s.listeners[key];
	                for(var func in funcs){
	                	try{
	                        funcs[func](args);
	                	}catch(e){
							console.info("listener error:" + e);                    		
	                	}
	                }
	        }
	    },
		listener: function(key, f){ //name, event, function
			var s = this.settings;
			if (typeof f == 'function'){
	            if (typeof (s.listeners[key]) != "undefined"){
	                var funcs = s.listeners[key];
	                funcs.push(f);
	            }else{
	                var funcs = new Array();
	                funcs.push(f);
	                this.removeListener(key);
	                s.listeners[key] = funcs;
	            }
	        }
		},
		removeListener : function(key, f){
			var s = this.settings;
	        if (typeof (s.listeners[key]) != "undefined"){
	            var funcs = s.listeners[key];
	            if(funcs.length==1){
	                delete s.listeners[key];
	            }else{
	                var newfuncs = new Array();
	                for(var func in funcs){
	                        if (funcs[func] != f){
	                                newfuncs.push(funcs[func]);
	                        }
	                }
	                delete s.listeners[key];
	                s.listeners[key] = newfuncs;
	            }
	        }
		},
		marquee: function(json_url, f){
			var s = this.settings;
			var current = 0;
			s.self.marquee.effect = "fade";
			s.self.marquee.speed = 3000;
			s.self.marquee.delay = 1000;
			s.self.marquee.timeout = 6000;
	
			if (typeof f == "function"){
				s.self.marquee.handler = f;
			}
			$.ajax({
				url: json_url,
				dataType: 'json',
				cache: false,
				async: false,
				handler: f,
				success: function(data) {
					$('.marquee', s.div).unbind();
					$('.marquee', s.div).html("");
					s.self.marqueeItem("　");
					if ( typeof this.handler == "function") {
						this.handler(data);
					} else {
						try {
							s.self.marquee.effect = data["effect"];
							s.self.marquee.speed = data["speed"];
							s.self.marquee.delay = data["delay"];
							s.self.marquee.timeout = data["timeout"];
						} catch(e) {
						}
						try {
							var items = data["items"];
							if (items.length > 0) {
								for (var i = 0; i < items.length; i++) {
									s.self.marqueeItem(items[i]["msg"]);
								}
							}
	
						} catch(e) {
						}
					}
					if ($(".marquee", s.div).html() == "") {
						s.self.marqueeItem("demo");
					}
					if ($(".marquee > div", s.div).length == 1) {
						$('.marquee', s.div).append($('.marquee', s.div).html());
					}
					$('.marquee', s.div).cycle({
						fx : s.self.marquee.effect,
						speed : s.self.marquee.speed,
						delay : s.self.marquee.delay,
						timeout : s.self.marquee.timeout,
						after : function() {
							current = current + 1;
							if (current > $(".marquee > div", s.div).size()) {
								s.self.marquee(s.self.marquee.url, s.self.marquee.handler);
							}
						}
					});
				}
				});
	
			return s.self;
		},
		marqueeItem: function(msg){
			var s = this.settings;
			if (msg=="　"){
			}else if (msg=="demo"){
				$('.marquee', s.div).html("<div>\n$.NatureFace.js plugin demo.\n</div>");
			}else{
				$('.marquee', s.div).append("<div>\n"+msg+"\n</div>");
			}
			return s.self;
		},
		subscribe: function(key, json_url, interval, f){
			var s = this.settings;
			$(document).everyTime(interval, key, function(){
				$.ajax({
	            	url: json_url,
	            	dataType: 'json',
	    			cache: false,
	            	async: false, 
	            	success: function(data){
	    		        	if (data.length>0){
	                        	if (typeof f == "function") f(data);
	                    	}
					}
	            });                               
			});
			return s.self;
		},
		unsubscribe: function(key){
			var s = this.settings;
			$(document).stopTime(key);
			return s.self;
		},
		jsonListing: function(g, data, updatefunc){
			var s = this.settings;
			var group = $("#group_"+g+'_div', s.div);
			var firstitem = $('[group='+g+']:eq(0)', s.div);
			var current, cols = parseInt(group.attr("cols"))>0 ? parseInt(group.attr("cols")) : 1;
			var container = $("#group_"+g+"_div_container", s.div);
			console.info("cols:" + cols);
			//清除第1個之外的items
			$('[group="' + g + '"]', s.div).filter(':not(:eq(0))').remove();
		
			//清除第一個內容
			firstitem.empty();
			
			//將資料填入表格中, 並生成item框
			for(var realpos=0; realpos<data.length; realpos++){
				//取得item
				if (realpos>=1){
					current = firstitem.clone().empty();
				}else{ //first item
					current = firstitem;
				}
				current.attr("id",firstitem.attr("group")+"_"+realpos);
				//設定item位置
				var rows = Math.ceil((realpos+1)/cols)-1;
				var gaps = realpos%cols;
				var top = (parseInt(firstitem.css("top"))+(parseInt(firstitem.height())*rows)) + "px";
				var left = (parseInt(firstitem.css("left"))+(parseInt(firstitem.width())*gaps)) + "px";
				console.info("realpos:" + realpos + " rows:" + rows + " gaps:" + gaps + " top:" + top + " left:" + left);
				current.css({"top" : top, "left" : left});
				if (realpos!=0) current.appendTo(group);
				if (typeof updatefunc == "function") updatefunc(current, data[realpos]);
			}
			
			if (data.length>0){
				group.css("height", (parseInt(current.css("top"))+current.height()+1) + "px");
				group.parent().css("height", group.height()+1);
			}
			
			if (typeof (s.groups[g]) == "undefined"){
				s.groups[g] =  
					new iScroll(container.attr("id"),{
						hScrollbar : false, 
						hScroll : false,
						onTouchEnd : function(){
							container.trigger("onTouchEnd");
						},
						onScrollEnd : function(){
							container.trigger("onTouchEnd");
						}
				});
			}
			
			s.groups[g].refresh();		
		},
		listing: function(g, l, sub_update, sub_updatepage, p){
			var s = this.settings;
			if(!p) p=1;
			$.ajax({
				groupname : g,
	            url: l+p,
				subupdate: sub_update, //更新item(item, dataitem)
				subpage: sub_updatepage,   //移除item(item, dataitem)
				page: p,
	            dataType: 'json',
	    		cache: false,
	            async: false, 
				pureurl:l,
	            success: function(data){
					var groupname = this.groupname;
					var items = $('[group='+groupname+']', s.div);
					var group = $("#group_"+groupname+'_div', s.div);
					var container = $("#group_"+groupname+"_div_container", s.div);
					var pureurl = this.pureurl;
					var currentpage = this.page;
					var updatefunc = this.subupdate;
					var pagefunc = this.subpage;
					var current, last = items.last(), defauleH = items;
					
					//將資料填入表格中, 並生成item框
					for(var i=0; i<data.items.length; i++){
						var realpos = data.absoluteposition + i - 1;
						if (realpos>=items.length){
							current = last.clone().empty();
							current.attr("id",last.attr("group")+"_"+realpos);
							current.css({
								"top" : (parseInt(last.css("top"))+last.height()) + "px", 
								"height" : (parseInt(current.css("line-height"))+2) + "px"
							}).appendTo(group);
							if (typeof updatefunc == "function") updatefunc(current, data.items[i]);
						}else{
							current = $(items[realpos]);
							if (typeof updatefunc == "function") updatefunc(current, data.items[i]);
							if (realpos>=1){ //取得上一個的top+height為此次的top
								last = $("#" + $(items[realpos]).attr("group") + "_"+(realpos-1), s.div);
								current.css("top", parseInt(last.css("top")) + last.height());
							}
						}
						last=current;
					}
					
					if (data.items.length>0){
						group.css("height", (parseInt(current.css("top"))+current.height()+1) + "px");
						group.parent().css("height", group.height()+1);
					}
					
					if (currentpage<data.pagecount){
						container.one("onTouchEnd", function(){
							s.self.listing(groupname, pureurl, updatefunc, pagefunc, currentpage+1);
						});
					}
					
					if (typeof (s.groups[groupname]) == "undefined"){
						s.groups[groupname] =  
							new iScroll(container.attr("id"),{
								hScrollbar : false, 
								hScroll : false,
								onTouchEnd : function(){
									container.trigger("onTouchEnd");
								},
								onScrollEnd : function(){
									container.trigger("onTouchEnd");
								}
						});
					}
					
					s.groups[groupname].refresh();
				}
	        });
			return s.self;
		},
		autofill: function(){
			setTimeout('$("div[autofill]", "' + this.settings.div + '").autofill()', 3);		
		},
		jsonTable: function(g, data, subupdate, subclear, p){
			var s = this.settings;
			if (typeof (s.groups[g]) != "undefined"){
				delete s.groups[g];
			}
			var btnleft = $('.NatureObject[binding='+g+'\\.left]', s.div);
			var btnright = $('.NatureObject[binding='+g+'\\.right]', s.div);
			var items = $('[group='+g+']', s.div);
	
			var allpage = items.length>0 ? Math.ceil(data.length/items.length) : 1;
	
			if(!p) p=allpage;
	
			var currentpage = p>allpage ? allpage : p;
			
			s.groups[g] = data;
			s.groups[g].subupdate= subupdate;
			s.groups[g].subclear= subclear;
			s.groups[g].page= currentpage;
			
			for(i=0; i<items.length; i++){
				$(items[i]).empty();
				var pos = (currentpage-1)*items.length+i;
				console.info("pos:" + pos + " data.length:" + data.length);
				if (pos<data.length){
					subupdate($(items[i]), data[pos], currentpage, allpage);
				}else{
					subclear($(items[i]), {}, currentpage, allpage);
				}
			}
					
			//left按鈕操作
			if (btnleft.length>0){
				btnleft.unbind("binding");
				if (currentpage>1){
					btnleft.bind("binding", function(){
						var bindingAttr = $(this).attr("binding");
						var group = bindingAttr.substring(0, bindingAttr.length-5); //.left
						var groupData = s.groups[group];
						s.self.jsonTable(group, groupData, groupData.subupdate, groupData.subclear, groupData.page-1);			
					});
				}
			}
			//right按鈕操作
			if (btnright.length>0){
				btnright.unbind("binding");
				if (allpage > currentpage){
					btnright.bind("binding", function(){
						var bindingAttr = $(this).attr("binding");
						var group = bindingAttr.substring(0, bindingAttr.length-6); //.right
						var groupData = s.groups[group];
						s.self.jsonTable(group, groupData, groupData.subupdate, groupData.subclear, groupData.page+1);		
					});
				}
			}		
		},
		binding: function(g, l, sub_update, sub_clear, p){
			var s = this.settings;
			if(!p) p=1;
			$.ajax({
				group : g,
				url: l+p,
				subupdate: sub_update, //更新item(item, dataitem)
				subclear: sub_clear,   //移除item(item, dataitem)
				page: p,
				dataType: 'json',
				cache: false,
				async: false,
				pureurl:l,
	           	success: function(data){
					console.log(data.items);
					if (typeof (s.groups[this.group]) != "undefined"){
						delete s.groups[this.group];
					}
					var btnleft = $('.NatureObject[binding='+this.group+'\\.left]', s.div);
					var btnright = $('.NatureObject[binding='+this.group+'\\.right]', s.div);
					var pageinfo = $('.NatureObject[binding='+this.group+'\\.pageinfo]', s.div);
					var items = $('[group='+this.group+']', s.div);
	
					//儲存資料至hashtable中
					data.url = this.pureurl;
					data.subupdate = this.subupdate;
					data.subclear = this.subclear;
	
					//放置hashtable
					s.groups[this.group] = data;
	
					if (data.pagecount>1 && pageinfo.length>0){
							$(pageinfo).text(data.absolutepage + "頁／" + data.pagecount + "頁");						
					}else if (pageinfo.length>0){
							$(pageinfo).text("1頁／1頁");
					}
	
					//將資料填入表格中
					var i=0;
					for(i=0; i<data.items.length; i++){
						if (typeof data.subupdate == "function"){
							$(items[i]).empty();
							data.subupdate($(items[i]), data.items[i]);
						}
					}
					//將資料不足部份清除
					for(var j=i; j<items.length; j++){
						if (typeof data.subclear == "function") data.subclear($(items[j]));
					}
					//left按鈕操作
					if (btnleft.length>0){
						btnleft.unbind("binding");
						btnleft.bind("binding", function(){
							var bindingAttr = $(this).attr("binding");
							var group = bindingAttr.substring(0, bindingAttr.length-5); //.left
							var groupData = s.groups[group];
							s.self.binding(group, groupData.url, groupData.subupdate, groupData.subclear, groupData.absolutepage-1);			
						});
					}
					//right按鈕操作
					if (btnright.length>0){
						btnright.unbind("binding");
						btnright.bind("binding", function(){
							var bindingAttr = $(this).attr("binding");
							var group = bindingAttr.substring(0, bindingAttr.length-6); //.right
							var groupData = s.groups[group];
							s.self.binding(group, groupData.url, groupData.subupdate, groupData.subclear, groupData.absolutepage+1);		
						});
					}
				}
	        });
			return s.self;
		}
	};
	
	//相容1.0版NatureFace，只有一個instance
	$.extend({
	    NatureFace : {
	        init: function(opt, fullscreen, prefix, firsttarget, touch) {
	            $.NatureFace = new NatureFace(opt, fullscreen, prefix, firsttarget, touch);
	            return $.NatureFace;
	        }
	    }
	})();
	
	return window.NatureFace = NatureFace;
};
	
if(typeof define == "function"){
	define(NatureFaceOrig);
}else{
	NatureFaceOrig();
}
