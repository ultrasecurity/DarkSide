<?php

$filecontent = file_get_contents("ip.txt");
if(!empty($filecontent)){
    print_r($filecontent);
    
    
}else{print_r("404");}



?>