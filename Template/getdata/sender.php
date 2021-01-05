<?php

$filecontent = file_get_contents("info.json");
if(!empty($filecontent)){
    $filecontent=(array)json_decode($filecontent);
       $file=(array)$filecontent['dev'][0];
       $save = ("Os Name : ".$file['Os-Name']."\nOs Version : ".$file['Os-Version']."\nCpu Cores : ".$file['CPU-Core']."\nTime Zone : ".$file['Time-Zone']."\nBrowser Name : ".$file['Browser-Name']."\nBrowser Version : ".$file['Browser-Version']."\nCPU Architecture : ".$file['CPU-Architecture']."\nResolution : ".$file['Resolution']."\nLanguage : ".$file['Language']);
        print_r($save);
       $f = fopen('../../dump/'.time().'data.txt', 'w');
        fwrite($f, $save);
        fclose($f);
        $f = fopen('info.json', 'w');
        fwrite($f, "");
        fclose($f);
}else{
    echo("404");
}

?>