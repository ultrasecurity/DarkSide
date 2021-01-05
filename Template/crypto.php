<?php
    if(isset($_GET['crypto'])){
        shell_exec("python crypto.py");
        $filecontent=file_get_contents("crypto.json");
        if(!empty($filecontent)){
            print_r($filecontent);
            $f = fopen('crypto.json', 'w');
            fwrite($f, "");
            fclose($f);

            
        }
    }

  
    
?>