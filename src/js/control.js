var video = null;

$(document).ready(function () {
    video = videojs('video');
    video.src("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");
    // video.play();
    console.log("ready!");
    $("#play").click(function () {
        console.log("Pushed play");
        video.play();
    });
    $("#pause").click(function () {
        video.pause();
    });
    $("#stop").click(function () {
        video.reset();
    });
    $("#fwd5").click(function () {
        video.currentTime(video.currentTime() + 5);
    });
    $("#bck5").click(function () {
        video.currentTime(video.currentTime() - 5);
    });
    $("#load").click(function () {
        video.src($("#src").val());
    });
});

