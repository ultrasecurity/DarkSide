<?php



$site = $_POST['iploc'];
if(isset($site)){

    shell_exec("python ip-loc.py ".$site);
    $filecontent=file_get_contents("result.json");
    if(!empty($filecontent)){

        print_r($filecontent);
        $f = fopen('result.json', 'w');
        fwrite($f, "");
        fclose($f);

            
    }

    }

?>