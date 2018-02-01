#!/usr/bin/php
<?php

	function get_str($str, $start_str, $end_str){
	   $start_pos = strpos($str, $start_str) + strlen($start_str);
	   $end_pos = strpos($str, $end_str, $start_pos);
	   $len = $end_pos - $start_pos;
	   return substr($str, $start_pos, $len);
	}

	define("OBJFUSCATOR_URL","http://javascriptobfuscator.com/default.aspx");

	if(sizeof($argv)<5){
		print "Usage: $argv[0] <readmefile> <usage file> <js file> <dest file>\n";
		exit(1);
	}
	
	$readme_file=$argv[1];
	$usage_file=$argv[2];
	$src_file=$argv[3];
	$dest_file=$argv[4];
	
	if(!file_exists($src_file) || !file_exists($readme_file) || !file_exists($usage_file)){
		print "No such file: $src_file\n";
		exit(2);
	}
	
	$readme = file_get_contents($readme_file);
	$usage = file_get_contents($usage_file);
	$src = file_get_contents($src_file);

	//這二個form的資料可能要修改（請連至http://javascriptobfuscator.com/default.aspx 查看source)
	$viewstate = '/wEPDwUKLTI0MDAwODAzNmQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgYFCGNiTGluZUJSBQhjYkluZGVudAULY2JFbmNvZGVTdHIFDmNiRW5jb2RlTnVtYmVyBQljYk1vdmVTdHIFDmNiUmVwbGFjZU5hbWVzkhu7ipx09t7ORqMSiqXAZjxixpvev5qGduB5U7lxKAA=';
		$eventvalidation = '/wEdAAtVzcjdONxmP98Zn2VeKgWWESCFkFW/RuhzY1oLb/NUVB2nXP6dhZn6mKtmTGNHd3PN+DvxnwFeFeJ9MIBWR693/0+kJGcigziRf+JnyYP3ngWOnPKUhxuCfOKb0tlvVuly5juiFHJSf6q9cXRA/+LsCzkidEk0Y8qCyJLcOKXNoEywswNt0lfddYqrIj/HYv1fNaBSlQ4gCFEJtbofwBY37hv76BH8vu7iM4tkb8en1RGDlH5soHS6hWUl4JVZYtSZ51XOVy0Wuo6R2616LTDx';

	$hr = curl_init();
	$opts = array(
		CURLOPT_URL		=> OBJFUSCATOR_URL, 
		CURLOPT_CUSTOMREQUEST	=> 'POST',
		CURLOPT_RETURNTRANSFER	=> 1,
		CURLOPT_POSTFIELDS	=> array(
			"__VIEWSTATE"	=> $viewstate,
			"__EVENTVALIDATION" => $eventvalidation,
			"TextBox1"	=> $src,
			"TextBox2"	=>'',
			"Button1"	=>'Obfuscate',
			"cbIndent"	=>'on',
			"cbEncodeStr"	=>'on',
			"cbEncodeNumber"=>'on',
			"TextBox3"	=>'
^_get_
^_set_
^_mtd_
'
		)
	);
	curl_setopt_array($hr, $opts);
	$content = curl_exec($hr);
	$status = curl_getinfo($hr, CURLINFO_HTTP_CODE);
	$content_type = curl_getinfo($hr, CURLINFO_CONTENT_TYPE);

	$newcode = get_str($content, '<textarea name="TextBox2" rows="2" cols="20" id="TextBox2" class="border-post">', '</textarea>');

	$fh = fopen($dest_file, 'w') or die("can't open file $dest_file");
	fwrite($fh, $readme."\n\n".$usage."\n\n".html_entity_decode($newcode));

	exit($status==200?0:1)
?>
