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
    $("#shuffle").click(function(){
        sources.sort(() => Math.random() - 0.5);
        constructList(sources);
    });
    $(':button[value="Value X"]').click(function(){
        $(this).parent().remove();
    });
});

var playVideo = function () {
    console.log(sources.length);
    if (sources.length > i+1 ) {
        console.log("enbdawe");
        var player = video;
        player.pause();
        i = i+1;
        console.log(sources[i]);
        player.src(sources[i]);
        player.load();
        player.play();
    } else {
        player.reset();
    }
};

var constructList = function(array){
    $("#playlist").empty();
    array.forEach(element => {
        $("#playlist").append("<div><i>"+element+"  </i><button>X</button></div>");
    });
}

