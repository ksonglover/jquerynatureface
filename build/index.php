<?php

require_once("setting.php");
define(HTML_FILE,'assets/template.html.php');

$PAGE = $_GET["p"];

if (is_null($PAGE)){
	$PAGE = "HOME";
}

$NAV_LINKS = "";
$SETTING = array();

foreach ($PAGES as $p => $data) {
	$active = "";
	if ($PAGE == $p){
		$active = "active";
		$SETTING = $data;
	}else{
		$active = "";
	}
	$NAV_LINKS .= '<li class="'.$active.'"><a href="'. $data["link"].'">'.$data["menu"].'</a></li>';
}

require_once(HTML_FILE);

?>