<div class="container">
    <div class="row">
      <div class="span3 bs-docs-sidebar">
        <ul class="nav nav-list bs-docs-sidenav">
          <li><a href="#NatureFaceClass"><i class="icon-chevron-right"></i> NatureFace 類別</a></li>
          <li><a href="#newNatureFace"><i class="icon-chevron-right"></i> 使用 NatureFace 物件</a></li>
          <li><a href="#NatureFaceMethods"><i class="icon-chevron-right"></i> 方法及事件 </a></li>
          <li><a href="#ThemeStructure"><i class="icon-chevron-right"></i> 佈景主題結構 </a></li>
          <li><a href="#ElementDefined"><i class="icon-chevron-right"></i> 元素定義檔 </a></li>
          <li><a href="#ElementAttrs"><i class="icon-chevron-right"></i> 擴充屬性說明 </a></li>
          <li><a href="#ElementControl"><i class="icon-chevron-right"></i> 控制元素 </a></li>
		  <li><a href="#ElementScript"><i class="icon-chevron-right"></i> 定義檔脚本 </a></li>          
		  <li><a href="#Requirejs"><i class="icon-chevron-right"></i> requirejs 支援 </a></li>
        </ul>
      </div>
      <div class="span9">
          <section id="NatureFaceClass">
            <div class="page-header">
              <h1>
                NatureFace 類別
              </h1>
            </div>
            <p>NatureFace類別，利用new方法來創建一個NatureFace物件，創建時可帶入一個theme，當然可以利用prefix來指定theme存放位置,
            	我們提供了相關的參數來設定如全螢幕、物件大小，甚至是可自行定義NatureFace容器的div container。</p>
          </section>

            <section id="newNatureFace">
            <div class="page-header">
              <h1>
                使用 NatureFace 物件
              </h1>
              <br>
              <h4>引入必要的js檔:</h4>
<pre class="prettyprint linenums">
&lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.1.8.2.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.NatureFace.js&quot;&gt;&lt;/script&gt;
</pre>

              
            </div>
            <div>
              <h4>建構參數:</h4>
				<table class="table table-bordered table-striped">
				<thead><th>參數</th><th>描述</th>
				</thead>
				<tbody>
					<tr><td>theme</td><td>佈景主題的第一個載入點頁面名稱</td></tr>
					<tr><td>fullscreen</td><td>布林值，是否為全螢幕, 如為true, 則 top, left, width及height四個參數失效</td></tr>
					<tr><td>prefix</td><td>佈景主題存放位置路徑</td></tr>
					<tr><td>firsttarget</td><td>第一個要切換的target,　內定為theme參數值</td></tr>
					<tr><td>touchscreen</td><td>強制指定是否為觸控(未指定將自動判斷, 有些紅外線觸控可能判斷錯誤)</td></tr>
					<tr><td>top</td><td>定位點 top</td></tr>
					<tr><td>left</td><td>定位點 left</td></tr>
					<tr><td>width</td><td>定位點 width(與height同時存在方能生效)</td></tr>
					<tr><td>height</td><td>定位點 height(與width同時存在方能生效)</td></tr>
					<tr><td>rootdiv</td><td>指定的 div element名稱</td></tr>
					<tr><td>html</td><td>直接填入的HTML檔內容, prefix及theme、pages參數, 以及*.js即無效</td></tr>
					<tr><td>pages</td><td>使用陣列定義欲載入的page, 使用此可取代page tag, 使用此參數theme則失效</td></tr>
					<tr><td>disablejs</td><td>是否載入js(避免console出現不必要的js載入錯誤, default:true)</td></tr>
					<tr><td>transparent</td><td>所有的元件皆為透明(純定位系統, 不使用背影圖按鈕化)</td></tr>
				</tbody>
  				</table>              
              <h4>範例:</h4>
<pre class="prettyprint linenums">
//jquery用法，當文件載入完成後執行	
$(document).ready(function() { 
    //建立400x800大小的NatureFace物件
    //載入template/START.html佈景主題，第一個要顯示的層(layer)為HOME層。
    var demo = new NatureFace({
        theme : "START", 
        fullscreen : false, 
        prefix : "template/",
        left : 0,
        top : 0,
        width : 480,
        height : 800,
        firsttarget : "HOME"
    });
});
</pre>
			</div>
		</section>
		
 		<section id="NatureFaceMethods">
            <div class="page-header">
              <h1>
                方法及事件
              </h1>
            </div>
              <p>這裡列出NatureFace可用的方法(函式), 及一些典型的範例程式片斷。</p>
            <div>
            <br>
          
            <div>
			<h4>方法(Method):</h4>
				<table class="table table-bordered table-striped">
				<thead><th>方法</th><th>描述</th>
				</thead>
				<tbody>
					<tr><td>target(layer)</td><td>跳至指定layer層(完成後將觸發 [target] event, 並回傳event, natureface, layer) </td></tr>
					<tr><td>layer()</td><td>取得目前layer名稱</td></tr>
					<tr><td>hide()</td><td>隱藏整個NatureFace</td></tr>
					<tr><td>show() </td><td>顯示整個NatureFace</td></tr>
					<tr><td>refresh()</td><td>重繪NatureFace，必須為fullscreen此函式才有效果，重繪後會觸發 refresh event.</td></tr>
					<tr><td>listener(key, function(data))[過期]</td><td>新增一個listener, key為NatureFace支援的事件，目前只有“target“可用，當target被觸發時，將執行該listener</td></tr>
					<tr><td>removeListener(key, function(data))[過期]</td><td>移除一個listener, key為NatureFace支援的事件，目前只有“target“可用</td></tr>
					<tr><td>autofill()</td><td>執行autofill 字型自動縮放功能，將所有div[autofill]元件下的div進行字型resize動作，注意div必須設為position: absolute;, 此funcion也是$.fn，所以也應用在任何div元件上。</td></tr>
					<tr><td>jsonTable(group, data, subupdate(item, dataitem, currentpage, allpage), subclear(item, dataitem, currentpage, allpage), page)</td><td>將json資料填入group表格中, 並於subupdate中進行item內容的顯示處理，subclear為空item使處理, page為顯示的頁面，沒設定為最後頁。</td></tr>
					<tr><td>jsonListing(group, data, subupdate(item, dataitem))</td><td>將json資料填入group表格中(scrollbar呈現)</td></tr>
				</tbody>
  				</table>

			<h4>事件(Event):</h4>
				<table class="table table-bordered table-striped">
				<thead><th>事件</th><th>描述</th>
				</thead>
				<tbody>
					<tr><td>target(event, natureface, layer)</td><td>切換頁面時，target將被觸發（與postEnter意義相同) </td></tr>
					<tr><td>preEnter(event, natureface, layer)</td><td>進入頁面前觸發的動作(頁面元素未顯示前）</td></tr>
					<tr><td>postEnter(event, natureface, layer)</td><td>進入頁面(頁面元素已顯示）</td></tr>
					<tr><td>preExit(event, natureface, layer)</td><td>離開頁面前(頁面元素尚未消失前，可利用natureface.eventValue=true|false取消切換）</td></tr>
					<tr><td>postExit(event, natureface, layer)</td><td>離開頁面後(元素已消失）</td></tr>
					<tr><td>refresh(event, natureface, layer)</td><td>呼叫refresh()後，觸發此元件，供外部進行resize處理</td></tr>
				</tbody>
  				</table>
  				  				           			
			<h4>範例:</h4>
			
<pre class="prettyprint">
//demo為NatureFace物件
//以下程式碼將NatureFace layer切換至HELLO層
demo.target("HELLO");

//取得頁面切換動作
$(document).bind("preExit postExit preEnter postEnter target", function(event, natureface, layer){
	console.info("event %o : %o" , event.type, layer);
	natureface.eventValue = true; //for preExit
});
	
//當切換至HELLO時，將json資料放於order表格中
$(document).bind("target", function(event, natureface, layer){
	if (layer == "HELLO"){
		natureface.jsonTable("order", 
			[
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
			],
			function(box, item, page, allpage){
				//重要，要設定autofill必須為position:absolute有效
				box.html(&#39;&lt;div style=&quot;position: absolute;&quot;&gt;&#39; + item.id + &quot; &quot; + item.name+&quot;&lt;/div&gt;&quot;);
				$(box).autofill();
			},
			function(box, item, page, allpage){ //此box己被執行$(box).empty()
			},
			1 
		);
	}
}); 
</pre>
 			</div>
          </section>
          
          

		  <section id="ThemeStructure">
            <div class="page-header">
              <h1>
                佈景主題結構
              </h1>
            </div>
              <p>一個佈景主題通常包含了圖檔、元素定義檔、甚至是javascript檔，在此說明這些檔案彼此關係，我們習慣把一個佈景主題存放在同一個目錄。</p>
            <div>
            <br>
			<img src="assets/img/page-strcture.png" border="0">
			<h4>說明</h4>
			<p>一般來說一個頁面由三個實體檔案所組成，NatureFace載入後再利用其元素定義檔內容進行互動及流程邏輯處理，接下來章節將為你介紹細部特性。</p>
 			</div>
          </section>
          
		  <section id="ElementDefined">
            <div class="page-header">
              <h1>
                元素定義檔
              </h1>
            </div>
              <p>定義UI控制元素的產生，我們利用HTML Map來定義NatureFace的元素，主要利用其「定位」的特色，最大的好處是其這類的編輯器隨處可取得，另外，就我們的經驗，
              	經過我們的加工（加上一些擴充屬性）後，這些工具還是可以相容運作的好好的。</p>
            <div>
            <br>
			<h4>HTML MAP編輯器介紹:</h4>
			<table class="table table-bordered table-striped">
				<thead><th>工具</th><th>描述</th></thead>
				<tbody>
					<tr><td><a href="http://www.adobe.com/tw/products/dreamweaver.html" target="blank" class="badge">Dreamweaver</a></td>
						<td>付費軟體，一個強大的網頁編輯器，對於編輯Map功能強大，且實作豐富元素的操作功能，如大小設定、元素對齊、複製貼上功能等等...。</td>	
					</tr>
					<tr><td><a href="http://www.image-maps.com" target="blank" class="badge badge-info">www.image-maps.com</a></td>
						<td>線上免費工具，透過上傳圖檔進行編輯定位，快速好用，但注意取得code時，應去除多餘的url及標籤。</td>	
					</tr>
					<tr><td><a href="http://www.nongnu.org/kimagemap/mainwindow.html" target="blank" class="badge badge-info">KImageMapEditor</a></td>
						<td>免費工具，一個Linux版的HTML MAP編輯器，如果你是使用Linux作業系統，這個工具是不錯的選擇。</td>	
					</tr>
				</tbody>
			</table>
			<br>
			<div>
			<h4>你應利用以上工具產生類似如下「純MAP」的HTML檔案:</h4>
			<pre class="prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;img src=&quot;HELLO.png&quot; border=&quot;0&quot; usemap=&quot;#Map&quot; width=&quot;480&quot; height=&quot;800&quot;/&gt;
&lt;map name=&quot;Map&quot; id=&quot;Map&quot;&gt;
&lt;area shape=&quot;rect&quot; href=&quot;txtMessage&quot; coords=&quot;120,82,396,272&quot;/&gt;
&lt;area shape=&quot;rect&quot; href=&quot;btnHI&quot; coords=&quot;46,286,222,376&quot;/&gt;
&lt;area shape=&quot;rect&quot; href=&quot;btnBack&quot; coords=&quot;267,286,439,377&quot;/&gt;
&lt;/map&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
			</div>
          </section>          


		  <section id="ElementAttrs">
            <div class="page-header">
              <h1>
                擴充屬性說明
              </h1>
            </div>
            <div>
              <h4>以下為NatureFace新增或重新定義之屬性用途:</h4>
				<table class="table table-bordered table-striped">
				<thead><th>標籤及屬性</th><th>描述</th>
				</thead>
				<tbody>
					<tr class="success"><td><strong>&lt;area&gt;</strong></td><td>定義一個新的元素</td></tr>
					<tr><td>href</td><td>不重覆的物件名稱id, 無設定時, 系統會自動加入一個隨機id，建議養成良好命名規則</td></tr>
					<tr><td>shape</td><td>限「rect」值，目前NatureFace只支援rect形狀(方形)</td></tr>
					<tr><td>class</td><td>物件類別, 目前支援的有 button(內定值), label, input（輸入框)。</td></tr>
					<tr><td>value</td><td>給予文字初值</td></tr>
					<tr><td>target</td><td>流程控管, 按下元素時, 將跳至此層(layer)</td></tr>
					<tr><td>layer</td><td>物件層次, 以逗號區隔, 空白表示永遠顯示</td></tr>
					<tr><td>layerdisable</td><td>物件層次, 是否可操作(可看到但不能操作)</td></tr>
					<tr><td>align</td><td>文字對齊方式：topcenter、topleft、topright、middlecenter、middleleft、middleright、bottoncenter、bottomleft、bottomright，<br>常搭配以下效果：style='white-space:nowrap;font-family:微軟正黑體,標楷體;font-size:20px; color:white; text-shadow: black 0.1em 0.1em 0.2em'</td></tr>
					<tr><td>autofill</td><td>文字自動填滿，如未設定font-size, 則由40px開始縮小，最小為4px。</td></tr>
					<tr><td>coords</td><td>元素座標位置，左上角座標，右下角座標， 如：25,20,75,82</td></tr>
					<tr><td>size</td><td>文字字型大小, 內定為14(過時, 請改用標準css用法)</td></tr>
					<tr><td>font</td><td>文字字型(過時, 請改用標準css用法)</td></tr>
					<tr><td>color</td><td>文字字型顏色, 內定為黑色(過時, 請改用標準css用法)</td></tr>
					<tr><td>opacity</td><td>透明度，分別代表 mousedown, mousemove, mouseup時的透明度, 為0~1之間的值，如 : 1,0.7,0.5</td></tr>
					<tr><td>style</td><td>為添加元素原生的HTML擴充性，我們保留style屬性</td></tr>
					<tr><td>group</td><td>表格產生器，與rows,cols搭配使用, 可配合jsonTable()、binding()或listing()使用(此部份尚無文件, 可來信索取支援)</td></tr>
					<tr><td>rows</td><td>指定表格列數</td></tr>
					<tr><td>cols</td><td>指定表格行數(listing, jsonListing不支援)</td></tr>
					<tr><td>binding</td><td>挷定表格上下頁按鈕，語法為binding=&quot;{group}.left&quot;或binding=&quot;{group}.left&quot;</td></tr>
					<tr><td><i>其他屬性</i></td><td>除了常用的style外，其實其他不在我們定義之外的屬性將完整被保留，例：為class=input, 加入placeholder屬性等等...</td></tr>
					<tr class="success"><td><strong>&lt;page&gt;</strong></td><td>載入一個新的元素定義檔</td></tr>
					<tr><td>src</td><td>元素定義檔名稱</td></tr>
					<tr><td>prefix</td><td>元素定義檔存取路徑</td></tr>
					<tr class="success"><td><strong>&lt;layer&gt;</strong></td><td>area未指定時layer值時, 可利用此標籤定義layer及target, 簡化設定過程</td></tr>
					<tr><td>default</td><td>此頁面內定的layer值</td></tr>
					<tr><td>target</td><td>此頁面內定的target值</td></tr>
					<tr class="error"><td><strong>&lt;debug&gt;</strong></td><td>開啟除錯功能模式，會在每個元素加上一個外框以利識別</td></tr>
					<tr><td>value</td><td>true 或 false</td></tr>
				</tbody>
  				</table>
			</div>
          </section>
          
          
          <section id="ElementControl">
            <div class="page-header">
              <h1>
                控制元素
              </h1>
            </div>
 			<p>利用元素的id(href屬性)我們就可輕易的操控這些元素，例如元素點擊時要進行何種動作或要加入style，其實與一般撰寫jquery一模一樣, 以下示範一些常用的操作，詳細可自行研究jquery的使用, 當然也可利用純javascript來操作。</p>
 			<br>
 			<div>
				<h4>以下做一些常用的示範</h4>
				<br>

				<p><strong>改變文字(text):</strong></p>
				<pre class="prettyprint linenums">
//改變元素的文字內容						
$("#lblID").text("ChangeText");
</pre>
<br>

				<p><strong>放置圖片(html):</strong></p>
				<pre class="prettyprint linenums">
//元素內放入image						
$("#lblID").html('&lt;img src=&quot;img/product.png&quot;&gt;'); 
</pre>
<br>

				<p><strong>點擊元素(click):</strong></p>
				<pre class="prettyprint linenums">
//於ID為btnID元素上點擊，並改變lblID的文字內容	
$("#btnID").bind("click", function(){
	$("#lblID").html("ChangeText");//你可以放置任何html碼至lblID div容器裡
});</pre>
<br>

 			</div>
          </section>

          <section id="ElementScript">
            <div class="page-header">
              <h1>
                定義檔脚本
              </h1>
            </div>
 			<p>我們為了讓每個頁面模組化，做到更好的抽換，你可以在每個元素定義檔都可以撰寫專用的javascript脚本，NatureFace即可自動於載入時執行。</p>
 			<br>
 			<div>
 				<h4>作法:</h4>
 				<p>你只要在你的元素定義檔同層目錄中建立一個同名的.js檔即可，注意使用時建議其元素命名不要有所重覆，以免造成不當的影响。</p><br>
 				<h4>範例:</h4>
<pre class="prettyprint">
  root/
  ├── template/
  │   ├── START.png
  │   ├── START.html
  │   ├── <strong>START.js</strong> (元素定義檔脚本)
  │   ├── HOME.png
  │   ├── HOME.html
  │   ├── <strong>HOME.js</strong> (元素定義檔脚本)
  │   ├── HELLO.png
  │   ├── HELLO.html
  │   └── <strong>HELLO.js</strong> (元素定義檔脚本)
  ├── js/
  │   ├── jquery.1.8.2.min.js
  │   └── jquery.NatureFace.js
  └── index.html
</pre>
 			
 			</div>
 			
          </section>


          <section id="Requirejs">
            <div class="page-header">
              <h1>
                Require JS 支援
              </h1>
            </div>
 			<p>為了方便require js使用者也能快樂使用 NatureFace(限v2.12版本以上), 請參考以下作法</p>
 			<br>
 			<div>
 				<h4>作法:</h4>
 				<p>請參考requirejs的shim設定，只要deps jquery即可使用</p><br>
 				<h4>範例:</h4>
<pre class="prettyprint">
var require = {
	shim: {
	　　　　natureface: {
	　　　　　	deps: ['jquery']
	　　　　}
	},
	paths: {
		jquery: '3party/jquery/dist/jquery',
		natureface: 'jquery.NatureFace'
	}
};

//即可使用natureface模組
define(["jquery", "natrueface"], function($, natureface){
	//do something;
});
</pre>
 			
 			</div>
 			
          </section>

      </div>
    </div>
  </div>
