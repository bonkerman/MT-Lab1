var video = null;

$(document).ready(function () {
    video = videojs('video');
    video.src("https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4");
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
    });
    $("#bck5").click(function () {
    });
    $("#load").click(function () {
    });
});

