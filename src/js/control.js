var player = document.getElementById("example-video");

function play() {
    player.play();
}

function pause() {
    player.pause();
}

function stop() {
    player.pause();
    player.currentTime(0);
}