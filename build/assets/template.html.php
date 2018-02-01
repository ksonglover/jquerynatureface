<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php print $SETTING["title"];?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/docs.css" rel="stylesheet">
    <link href="assets/css/prettify.css" rel="stylesheet">

    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', '<?php print $GA_ID?>']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </head>

  <body data-spy="scroll" data-target=".bs-docs-sidebar">
      

    <!-- Navbar
    ================================================== -->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="./index.php"><?php print $BRAND;?></a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <?php print $NAV_LINKS;?>
            </ul>
          </div>
        </div>
      </div>
    </div>

<!-- Masthead
================================================== -->
<header class="jumbotron subhead" id="overview">
  <div class="container">
    <h1><?php print $SETTING["subhead"];?></h1>
    <p class="lead"><?php print $SETTING["description"];?></p>
  </div>
</header>

    <?php require_once($SETTING["content"]);?>
    

    <footer class="footer">
      <div class="container">
          <div>©2003~2016 jquery.NatureFace.js</div>
          <div class="omega copyright">本網站及 jquery.NatureFace.js 之所有內容除另有註明外皆採用</div>
          <div class="omega copyright"><a href="http://creativecommons.org/licenses/by-nc-nd/3.0/tw/legalcode"> 創用CC 姓名標示─非商業性─禁止改作 3.0 台灣 授權條款</a> <div>
          <div><img border="0" src="assets/img/cc-by-nc-nd-88x31.png"></div>
      </div>
    </footer>
    <script type="text/javascript" src="assets/js/widgets.js"></script>
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
    <script src="assets/js/bootstrap-affix.js"></script>
    <script src="assets/js/holder.js"></script>
    <script src="assets/js/prettify.js"></script>
    <script src="assets/js/application.js"></script>
    <script type="text/javascript">
     var cq = document.createElement('script'); cq.type = 'text/javascript'; cq.async = true;
     cq.src ='http://webcq.lijifun.com/dist/widget.js';
     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cq, s);
    </script>
  </body>
</html>
