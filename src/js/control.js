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

function load(url) {
    var videoUrl = document.getElementsByName(url)[0].value;
    player.src(videoUrl);
}

function shuffle() {
    // name tags of input fields
    var videos = [
        "url1",
        "url2"
    ];

    // select random video from array
    var video = videos[Math.floor(Math.random() * videos.length)];

    // Load it
    load(video);
}