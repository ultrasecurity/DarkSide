<?php

if(isset($_GET['news'])){

    shell_exec("python news.py");
    $filecontent=file_get_contents("news.json");
    if(!empty($filecontent)){

        print_r($filecontent);
        $f = fopen('news.json', 'w');
        fwrite($f, "");
        fclose($f);

            
    }
}

?>