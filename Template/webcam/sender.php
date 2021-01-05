<?php

$filecontent = file_get_contents("info.txt");
if(!empty($filecontent)){
    print_r($filecontent);
    $f = fopen('info.txt', 'w');
    fwrite($f, "");
    fclose($f);
    
}else{print_r("404");}



?>