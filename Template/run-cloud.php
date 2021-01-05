<?php

if(isset($_POST['input'])){
    $input = $_POST['input'];
    shell_exec('python cms.py '.$input);
    $data = file_get_contents("result.txt");
    $backup = $data;
    if(!empty($data)){
        print_r($data);
        $f = fopen('result.txt', 'w');
        fwrite($f, "");
        fclose($f);
    }else{print_r(404);}
}


?>