var player = document.getElementById("example-video");

const timeSpan = 5;

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

function forward() {
    player.currentTime(player.currentTime() + timeSpan);
}

function backward() {
    player.currentTime(player.currentTime() - timeSpan);
}
