var video = null;

$(document).ready(function () {
    video = videojs('video', {
        "controls": true
    });
    video.src("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");
    // video.play();
    console.log("ready!");
    $("#play").click(function () {
        if ($(this).text() == "Play") {
            video.play();
            $(this).text("Pause")
        } else {
            video.pause();
            $(this).text("Play")
        }

    });
    $("#stop").click(function () {
        video.reset();
    });
    $("#fwd5").click(function () {
        video.currentTime(video.currentTime() + 5);
    });
    $("#bck5").click(bck);
    $("#load").click(function () {
        video.src($("#src").val());
    });
});

