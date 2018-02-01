$(document).ready(function() {
	//取得頁面切換動作
	$(document).bind("preExit postExit preEnter postEnter target", function(event, natureface, layer){
		console.info("event %o : %o" , event.type, layer);
		natureface.eventValue = true; //for preExit
	});
	
	$(document).bind("target", function(event, natureface, layer){
		//console.info("xxxx:" + layer);	
		if (layer == "HELLO"){
			var data = [
					{"id":"0001", "name":"可口可樂"}, 
					{"id":"0002", "name":"咖啡"},
					{"id":"0003", "name":"沙士1"},
					{"id":"0004", "name":"沙士2"},
					{"id":"0005", "name":"沙士3"},
					{"id":"0006", "name":"沙士4"},
					{"id":"0007", "name":"沙士5"},
					{"id":"0008", "name":"沙士6"},
					{"id":"0009", "name":"沙士7"},
					{"id":"0010", "name":"沙士8"}
				];
				
			natureface.jsonTable("order", 
				data,
				function(box, item, page, allpage){
					//重要，要設定autofill必須為position:absolute有效，並建議使用left, top來預留空白，以免併在一起
					box.html('<div style="position: absolute;left: 10px; top: 10px;">' + item.id + " " + item.name+"</div>");
					$(box).autofill();
				},
				function(box){
					//console.info("xxxx:" + box);	
				}
			);
			
			natureface.jsonListing("orderList", 
				data,
				function(box, item, page, allpage){
					//重要，要設定autofill必須為position:absolute有效，並建議使用left, top來預留空白，以免併在一起
					box.html('<div style="position: absolute;left: 10px; top: 10px;">' + item.id + " " + item.name+"</div>");
					$(box).autofill();
				}
			);
			$("#btnBack #btnHI #txtMessage").text("XXXXX");
		}
	}); 
});