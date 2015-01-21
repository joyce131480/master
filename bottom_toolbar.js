var BottomToolbar = (function (my) {
    my.toggleChat = function() {
        PanelToggler.toggleChat();
    };

    my.toggleContactList = function() {
        PanelToggler.toggleContactList();
    };
    /**
     * 这个用于点击电影图标时，可以显示和隐藏remoteVideo
     */
    my.toggleFilmStrip = function() {
        var filmstrip = $("#remoteVideos");
        filmstrip.toggleClass("hidden");
    };

    $(document).bind("remotevideo.resized", function (event, width, height) {
        var bottom = (height - $('#bottomToolbar').outerHeight())/2 + 18;

        $('#bottomToolbar').css({bottom: bottom + 'px'});
    });

    return my;
}(BottomToolbar || {}));
