<?php

$date = date('dMYHis');
$imageData=$_POST['cat'];

if (!empty($_POST['cat'])) {
error_log("Received" . "\r\n", 3, "Log.log");

}

$filteredData=substr($imageData, strpos($imageData, ",")+1);
$unencodedData=base64_decode($filteredData);
$fp = fopen( 'images/cam'.$date.'.png', 'wb' );

$filename = 'images/cam'.$date.'.png';
fwrite( $fp, $unencodedData);
fclose( $fp );
$f = fopen('info.txt', 'w');
fwrite($f, $filename);
fclose($f);
exit();
?>

