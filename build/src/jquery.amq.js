(function($){
   if ($.amq == undefined) {
	$.amq = {
		connect : function(){
			if ($.amq.connected) return;
			//console.info("connection mq server...");
			$.amq._SubscribeListeners = {};
			$.amq.connected = false;
			$.amq._service = org.activemq.Amq;
			//$.amq.subscribe();
			try{
			        $.amq._service.init({
			                uri: '/amq',
			                logging: true,
		        	        timeout: 45,
		                	clientId: (new Date()).getTime().toString(),
					connectStatusHandler : function(connected){
						//console.info("amq connected:" + connected);
						if (!$.amq.connected && connected){
							$.amq._putListeners();
							$.amq.connected = true;
						}else if(!connected){
							$.amq.connected = false;
						}
					},
					sessionInitializedCallback: function(){
						console.info("amq ready.................");
						$.amq.connected = true;
						$.amq._putListeners();
					}
			        });
			}catch(e){
				console.info(e);
			}
		},
		subscribe : function(dest, callback){
			if (typeof($.amq._SubscribeListeners[dest]) == "undefined"){
				$.amq._SubscribeListeners[dest] = [];
			}
			$.amq._SubscribeListeners[dest].push(callback);			
			if ($.amq.connected)
				$.amq._addListener(dest, callback);
		},
		unsubscribe : function(dest){
			 $.amq._service.removeListener('example', dest);
		},
		send : function(dest, message){
			if ($.amq.connected){
				$.amq._service.sendMessage(dest, message);
			}
		},
		connected : false,
		_service : null,
		_putListeners : function(){
			for(var k in $.amq._SubscribeListeners){
				for(var i=0; i<$.amq._SubscribeListeners[k].length; i++){
					$.amq._addListener(k, $.amq._SubscribeListeners[k][i]);
				}
			}
		},
		_SubscribeListeners : {},
		_addListener: function(dest, callback){
		        $.amq._service.addListener('example', dest, callback);
		}
	}
   }
})(jQuery);
