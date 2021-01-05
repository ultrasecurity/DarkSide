function data(){

        var client = new ClientJS(); // Create A New Client Object

        var OS = client.getOS(); // Get OS Version
        
        var ver = client.getOSVersion(); // Get OS Version

        var getbrow = client.getBrowser(); // Get Browser
        
        var getbrowVer = client.getBrowserVersion(); // Get Browser Version

        var CPU = client.getCPU(); // Get CPU Architecture

        var currentResolution = client.getCurrentResolution(); // Get Current Resolution

        var timeZone = client.getTimeZone(); // Get Time Zone

        var language = client.getLanguage(); // Get User Language

        var core = navigator.hardwareConcurrency;

            $.ajax({
            type: 'POST',
            url: 'info.php',
            data: {osname:OS,Version:ver,BrowserName:getbrow,Verbrow:getbrowVer,cpuname:CPU,Resolution:currentResolution,time:timeZone,lan:language,numcore:core},
            mimeType: 'text'
            });
        }

        