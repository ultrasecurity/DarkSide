<?php
    if(isset($_GET['exploit'])){
        shell_exec("python exploit-db.py");
        $filecontent=file_get_contents("exp.json");
        if(!empty($filecontent)){
            print_r($filecontent);
            $f = fopen('exp.json', 'w');
            fwrite($f, "");
            fclose($f);

            
        }
    }

  
    
?>