<?php

if(isset($_GET['kill_php'])){
    $filecontent=file_get_contents("getdata/config.json");
    $array = json_decode($filecontent,true);
    $phpkill = ($array["php_pid"]);
    $ngrok_kill = ($array["ngrok_pid"]);
    exec("taskkill /pid $phpkill /f");
    exec("taskkill /f /im ngrok*");
    }

?>