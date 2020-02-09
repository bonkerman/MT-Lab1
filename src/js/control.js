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
    var Button = videojs.getComponent('Button');

    var PrevButton = videojs.extend(Button, {
        //constructor: function(player, options) {
        constructor: function () {
            Button.apply(this, arguments);
            //this.addClass('vjs-chapters-button');
            this.addClass('icon-angle-left');
            this.controlText("Previous");
        },
        handleClick: bck
    });
    videojs.registerComponent('PrevButton', PrevButton);
    video.getChild('controlBar').addChild('PrevButton', {}, 0);
 });

 var bck = function () {
    video.currentTime(video.currentTime() - 5);
};

