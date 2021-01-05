<?php

$site = $_POST['url'];
if(isset($site)){

    shell_exec("python reverse.py ".$site);
    $filecontent=file_get_contents("result.txt");
    if(!empty($filecontent)){
        print_r($filecontent);
        $f = fopen('result.txt', 'w');
        fwrite($f, "");
        fclose($f);

        
    }

}else {
    print_r(404);
}



?>