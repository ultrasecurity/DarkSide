<?php

if(isset($_GET['getfile'])){

    shell_exec("python learn.py");
    $filecontent=file_get_contents("learn.json");
    if(!empty($filecontent)){

        print_r($filecontent);
        $f = fopen('learn.json', 'w');
        fwrite($f, "");
        fclose($f);

            
    }
}

?>