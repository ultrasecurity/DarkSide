<?php
$ptf = $_POST['succ'];


if (!empty($_SERVER['HTTP_CLIENT_IP']))
{
  $ipaddress = $_SERVER['HTTP_CLIENT_IP']."\r\n";
}
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
  $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR']."\r\n";
}
else
{
  $ipaddress = $_SERVER['REMOTE_ADDR']."\r\n";
}


$file = 'ip.txt';
$fp = fopen($file, 'a');

fwrite($fp, "IP Opened Link > ".$ipaddress);

fclose($fp);


?>