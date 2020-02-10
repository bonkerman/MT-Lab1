var video = null;
var sources = ["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"];
var i = 0;

$(document).ready(function () {
    video = videojs('video', {
        "controls": true
    });
    video.on('ended', playVideo);
    video.src(sources[i]);
    constructList(sources);
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
    $("#bck5").click(function () {
        video.currentTime(video.currentTime() - 5);
    });
    $("#load").click(function () {
        video.src($("#src").val());
    });
    $("#addToPlaylist").click(function () {
        sources.push($("#src").val());
        constructList(sources);
    });
    $("#shuffle").click(function () {
        if (sources.length > 1) {
            sources.sort(() => Math.random() - 0.5);
            constructList(sources);
        }
        i = 0;
    });
});

var playVideo = function () {
    console.log(sources.length);
    if (sources.length > i + 1) {
        i = i + 1;
        setSourceAndPlay(sources[i]);
    } else {
        this.reset();
    }
};

var constructList = function (array) {
    $("#playlist").empty();
    array.forEach(element => {
        $("#playlist").append("<div><i class=\"element\">" + element + "  </i><button>X</button></div>");
    });
    $('button:contains(X)').click(function () {
        var text = $(this).parent().children().first().text();
        array = array.filter(function (value, index, arr) {

            return value == text;

        });
        $(this).parent().remove();
        sources = array;
    });
    $(".element").click(function () {
        setSourceAndPlay($(this).text());
    });
};

var setSourceAndPlay = function (source) {
    video.pause();
    video.reset();
    console.log(source);
    video.src(source);
    video.load();
    video.play();
};

