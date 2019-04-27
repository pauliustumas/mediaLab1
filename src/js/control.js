var player = videojs('v_01');
    function play() { 
    player.play();
    }
    function pause() {
        player.pause();
    }
    function stop(){
        player.currentTime(0);
        player.pause();
    }
    function JumpForwards(){
         player.currentTime(player.currentTime() + 5);
    }