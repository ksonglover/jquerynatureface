  <div class="container">

    <!-- Docs nav
    ================================================== -->
    <div class="row">
      <div class="span3 bs-docs-sidebar">
        <ul class="nav nav-list bs-docs-sidenav affix-top">
          <li class="active"><a href="#downloadjs"><i class="icon-chevron-right"></i> 下載</a></li>
          <li><a href="#prepare-knowlege"><i class="icon-chevron-right"></i> 先有觀念</a></li>
          <li><a href="#drawui"><i class="icon-chevron-right"></i> 畫圖吧</a></li>
          <li><a href="#defined-elements"><i class="icon-chevron-right"></i> 元素定位及工具</a></li>
          <li><a href="#firstui"><i class="icon-chevron-right"></i> 我的第一介面</a></li>
          <!--<li><a href="#examples"><i class="icon-chevron-right"></i> 更多範例</a></li>-->
          <li><a href="#what-next"><i class="icon-chevron-right"></i> 接下來呢?</a></li>
        </ul>
      </div>
      <div class="span9">

        <!-- Download
        ================================================== -->
        <section id="downloadjs">
          <div class="page-header">
            <h1>1. 下載 </h1>
          </div>
          <p class="lead">在下載之前，我們建議你先準備好你的編輯環境，如一個網頁空間及程式編輯工具等等，
              但最重要的是一個可以設計的美美介面的美工人員 。另外雖不需要很強的程式能力，但還是建議能有相關的 <a href="http://www.jquery.com" target="_blank">jquery</a>
              使用的基礎知識。此外在我們這裡不會有太多撰寫程式的討論，如果你都準備好了，那就下載吧，展開UI的神奇之旅 。</p>

          <div class="row-fluid">
            <div class="span6">
              <h2>下載 jquery.NatureFace.js</h2>
              <p>直接取得 .js 檔案，這個下載不包含其他任何的範本及文件。</p>
              <p><a class="btn btn-large btn-primary" href="https://github.com/ksonglover/jquerynatureface/blob/master/jquery.NatureFace.js" target="blank"  onclick="_gaq.push(["_trackEvent", "Getting started", "Download", "Downalod js"]);">Download jquery.NatureFace.js</a></p>
            </div>
            <div class="span6">
              <h2>下載展示包</h2>
              <p>這個包含了此頁所示範的成果。</p>
              <p><a class="btn btn-large" href="downloads/NatureFace-demo.tar.gz" onclick="_gaq.push("_trackEvent", "Getting started", "Download", "Download tarball"]);">Download Demo</a></p>
            </div-->
          </div>
        </section>

        <!-- prepare knowlege
        ================================================== -->
        <section id="prepare-knowlege">
          <div class="page-header">
            <h1>2. 先有觀念</h1>
          </div>
          <p class="lead">NatureFace所有介面都是以圖檔呈現，所以你必須有一些基本觀念，做出來的介面速度及效果才會完美。</p>
           <li>1024x768的全黑jpg/png圖多大，壓縮比愈大檔案愈小</li> 
           <li>一個原本就是MVC架構,何時變得要特別強調，把每個功能畫成圖即是介面?</li>
           <li>專業分工 : 專業的人做專業的事，別再叫工程師畫圖了!</li>
           <li>我們要需要什麼? button, label, table, popup，message, 好像沒了?</li>
           <li>要更炫?擴充,還是原來的能力，你還是可以做你原來想做的事～</li>
        </section>

        <!-- Draw User Interface
        ================================================== -->
        <section id="drawui">
          <div class="page-header">
            <h1>3. 畫圖吧</h1>
          </div>
          <p class="lead">NatureFace是一個所見即所得的UI工具，所以你只要畫的出來，就會被忠實的呈現，在此我們準備了三張圖，
              分別代表START、HOME、HELLO三頁，別客氣！你也可以自己動手作。必須注意圖的大小請依你要呈現於何種裝置的大小相同，
              雖NatureFace支援resize，但為求最佳品質，其大小不要差異過大。(另外我們建議底圖外，其餘圖檔底色使用透明圖層。)</p>
          
          <ul class="thumbnails bootstrap-examples">
            <li class="span3">
              <a class="thumbnail" href="./template/START.png" target="_blank">
                <img src="./template/START.png" style="background-color: #bebec5;" alt="背景圖">
              </a>
              <h4>START頁</h4>
              <p>是一張全幅的圖檔，做為介面背景圖(362.1kb)。</p>
            </li>
            <li class="span3">
              <a class="thumbnail" style="background-color: #bebec5;" href="./template/HOME.png" target="_blank">
                <img src="./template/HOME.png" alt="介紹頁">
              </a>
              <h4>HOME頁</h4>
              <p>一張透明底的png圖，並放置了一個icon，還有一些介紹的文字。(18.9kb)</p>
            </li>
            <li class="span3">
               <a class="thumbnail" style="background-color: #bebec5;" href="./template/HELLO.png" target="_blank">
                <img src="./template/HELLO.png" alt="hello world">
              </a>
              <h4>HELLO頁</h4>
              <p>一張透明底的png圖，並包含二個按鈕及一個文字框。(6.0kb)</p>
            </li>
          </ul>
          <p>這邊我們假設介面是用於手機，其解析度為480x800, 介面功能情境 ：</p>
           <li>顯示START頁, 並同時顯HOME頁元素</li> 
           <li>點擊HOME頁上的元素切換至HELLO頁</li>
           <li>HELLO頁有二個按鈕「Hi」、「返回」及一個文字框</li>
           <li>點擊Hi，切換至POPUP頁，即顯示文字框“hello world."</li>
        </section>



        <!-- Defined elements
        ================================================== -->
        <section id="defined-elements">
          <div class="page-header">
            <h1>4. 元素定位及工具</h1>
          </div>
          <p class="lead">為每張頁進行元素定位，我們使用HTML中常用的MAP標籤來定義元素，你可利用市面上常用的HTML的工具來生成，例如Dreamweaver、KimageMapEditor或線上HTML map編輯工具，
              並將上述的圖檔進行元素定位，並分別取名為START.html、HOME.html及HELLO.html三個元素定義檔，說明如下所示。</p>

          <p><strong>START.html</strong>:</p>
<pre class="prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;!--使用START.png當成介面圖,其大小為480x800--&gt;
&lt;img src=&quot;START.png&quot; border=&quot;0&quot; usemap=&quot;#Map&quot; width=&quot;480&quot; height=&quot;800&quot;/&gt;
&lt;map name=&quot;Map&quot; id=&quot;Map&quot;&gt;
&lt;!--定素bg元素，範圍為全張圖片, 並位於全域層(layer=&quot;&quot;, 任何時候皆顯示) --&gt;
&lt;area shape=&quot;rect&quot; href=&quot;bg&quot; coords=&quot;1,1,479,799&quot; layer=&quot;&quot;/&gt;
&lt;/map&gt;
&lt;page src=&quot;HOME&quot;/&gt;&lt;!--載入HOME頁--&gt;
&lt;page src=&quot;HELLO&quot;/&gt;&lt;!--載入HELLO頁--&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

 <p><strong>HOME.html</strong>:</p>
<pre class="prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;!--使用HOME.png當成介面圖,其大小為480x800--&gt;
&lt;img src=&quot;HOME.png&quot; border=&quot;0&quot; usemap=&quot;#Map&quot; width=&quot;480&quot; height=&quot;800&quot;/&gt;
&lt;map name=&quot;Map&quot; id=&quot;Map&quot;&gt;
&lt;!--定素btnPress元素，位於HOME層(layer)，點擊後切換到HELLO層(layer)--&gt;
&lt;area shape=&quot;rect&quot; href=&quot;btnPress&quot; coords=&quot;1,1,479,799&quot; target=&quot;HELLO&quot; layer=&quot;HOME&quot;/&gt;
&lt;/map&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

 <p><strong>HELLO.html</strong>:</p>
<pre class="prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;!--使用HOME.png當成介面圖,其大小為480x800--&gt;
&lt;img src=&quot;HELLO.png&quot; border=&quot;0&quot; usemap=&quot;#Map&quot; width=&quot;480&quot; height=&quot;800&quot;/&gt;
&lt;map name=&quot;Map&quot; id=&quot;Map&quot;&gt;
&lt;!--定素txtMessage元素，位於POPUP層，點擊後切換到HELLO層, 文字內容為Hello world.顏色為白色--&gt;
&lt;area shape=&quot;rect&quot; href=&quot;txtMessage&quot; coords=&quot;120,82,396,272&quot; target=&quot;HELLO&quot; layer=&quot;POPUP&quot; value=&quot;Hello world.&quot; size=&quot;26&quot; color=&quot;white&quot; align=&quot;middlecenter&quot;/&gt;
&lt;!--定素btnHI元素，位於HELLO及POPUP層，點擊後切換到POPUP層, 按鈕的透明度效果為[0.9,0.7,0.5]--&gt;
&lt;area shape=&quot;rect&quot; href=&quot;btnHI&quot; coords=&quot;46,286,222,376&quot; target=&quot;POPUP&quot; layer=&quot;HELLO,POPUP&quot; opacity=&quot;0.9,0.7,0.5&quot;/&gt;
&lt;!--定素btnBack元素，位於HELLO及POPUP層，點擊後切換回HOME層, 按鈕的透明度效果為[0.9,0.7,0.5]--&gt;
&lt;area shape=&quot;rect&quot; href=&quot;btnBack&quot; coords=&quot;267,286,439,377&quot; target=&quot;HOME&quot; layer=&quot;HELLO,POPUP&quot; opacity=&quot;0.9,0.7,0.5&quot;/&gt;
&lt;/map&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

          <h4>標籤tag及屬性attribute說明</h4>
          <p>我們用HTML Map來定義元素，內定的屬性(如href、target)我們重新定義用途外，我們也擴充了許多的標籤及屬性來使用，我們會陸續介紹，點擊「擴充屬性」取得完整的規格。</p>
          <p><a class="btn btn-large btn-primary" href="?p=Documents#ElementAttrs" onclick="_gaq.push(["_trackEvent", "Getting started", "Documents", "ElementAttrs"]);">擴充屬性</a></p>
              
        </section>



        <!-- First UI
        ================================================== -->
        <section id="firstui">
          <div class="page-header">
            <h1>5. 我的第一個介面</h1>
          </div>
          <p class="lead">完成以上的準備，我們幾乎完成所有的工作了，我們把它全部放至template資料夾，再來就是如何把它載入，並將結果呈現出來，將以上的成果存放在如下的目錄結構：</p>
<pre class="prettyprint">
  root/
  ├── template/
  │   ├── START.png
  │   ├── START.html
  │   ├── HOME.png
  │   ├── HOME.html
  │   ├── HELLO.png
  │   └── HELLO.html
  ├── js/
  │   ├── jquery.1.8.2.min.js
  │   └── jquery.NatureFace.js
  └── index.html
</pre>
          
          
          <p>接下來，我們撰寫一個 <strong>典型的HTML檔</strong>:</p>
<pre class="prettyprint linenums">
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;height=device-height, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no&quot;&gt; 
&lt;meta charset=&quot;utf-8&quot;&gt; 
&lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.1.8.2.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.NatureFace.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
$(document).ready(function() { 
    var demo = new NatureFace({
        theme : &quot;START&quot;, 
        fullscreen : false, 
        prefix : &quot;template/&quot;,
        left : 0,
        top : 0,
        width : 480,
        height : 800,
        firsttarget : &quot;HOME&quot;
    });
});
&lt;/script&gt;
&lt;/html&gt;    
</pre>
        </section>

        <p>你可看查看這裡的執行結果:</p>
        <p><a class="btn btn-large btn-primary" href="demo.html" onclick="_gaq.push(["_trackEvent", "Getting started", "Demo", "demo.html"]);" target="_blank">View Demo</a></p>

        <!-- Examples
        ================================================== 
        <section id="examples">
          <div class="page-header">
            <h1>5. 更多的範例</h1>
          </div>
          <p class="lead">Move beyond the base template with a few example layouts. We encourage folks to iterate on these examples and not simply use them as an end result.</p>
          <ul class="thumbnails bootstrap-examples">
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/starter-template.html">
                <img src="./Bootstrap_files/bootstrap-example-starter.png" alt="">
              </a>
              <h4>Starter template</h4>
              <p>A barebones HTML document with all the Bootstrap CSS and JavaScript included.</p>
            </li>
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/hero.html">
                <img src="./Bootstrap_files/bootstrap-example-marketing.png" alt="">
              </a>
              <h4>Basic marketing site</h4>
              <p>Featuring a hero unit for a primary message and three supporting elements.</p>
            </li>
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/fluid.html">
                <img src="./Bootstrap_files/bootstrap-example-fluid.png" alt="">
              </a>
              <h4>Fluid layout</h4>
              <p>Uses our new responsive, fluid grid system to create a seamless liquid layout.</p>
            </li>

            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/marketing-narrow.html">
                <img src="./Bootstrap_files/bootstrap-example-marketing-narrow.png" alt="">
              </a>
              <h4>Narrow marketing</h4>
              <p>Slim, lightweight marketing template for small projects or teams.</p>
            </li>
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/justified-nav.html">
                <img src="./Bootstrap_files/bootstrap-example-justified-nav.png" alt="">
              </a>
              <h4>Justified nav</h4>
              <p>Marketing page with equal-width navigation links in a modified navbar.</p>
            </li>
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/signin.html">
                <img src="./Bootstrap_files/bootstrap-example-signin.png" alt="">
              </a>
              <h4>Sign in</h4>
              <p>Barebones sign in form with custom, larger form controls and a flexible layout.</p>
            </li>

            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/sticky-footer.html">
                <img src="./Bootstrap_files/bootstrap-example-sticky-footer.png" alt="">
              </a>
              <h4>Sticky footer</h4>
              <p>Pin a fixed-height footer to the bottom of the user's viewport.</p>
            </li>
            <li class="span3">
              <a class="thumbnail" href="http://twitter.github.com/bootstrap/examples/carousel.html">
                <img src="./Bootstrap_files/bootstrap-example-carousel.png" alt="">
              </a>
              <h4>Carousel jumbotron</h4>
              <p>A more interactive riff on the basic marketing site featuring a prominent carousel.</p>
            </li>
          </ul>
        </section>-->

        <!-- Next
        ================================================== -->
        <section id="what-next">
          <div class="page-header">
            <h1>接下來呢?</h1>
          </div>
          <p class="lead">有了以上的基礎後，我們認為你應該已了解NatureFace做了什麼事，它利用圖檔來呈現介面，簡單的利用Map來定義UI元件，再透過NatureFace物件來實體化。
              接下來你要做的是了解更多的元素的定義屬性及NatureFace物件的使用方法，你可前往Document章節進行學習了。
          <p><a class="btn btn-large btn-primary" href="?p=Documents" onclick="_gaq.push(["_trackEvent", "Getting started", "WhatNext", "documents"]);">Documents</a></p>

        </section>

      </div>
    </div>

  </div>
