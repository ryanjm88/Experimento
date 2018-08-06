$("#search").on("click", function () {
    var query = $("#searchInput").val().trim();

    console.log(query);

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&type=video&key=AIzaSyDVsUtmRBT_SXAPJCGmS3JFxLHMWJ0ZDbA",
        method: "GET"
    }).then(function(response)  {
        console.log(response);
        console.log(response.items[0].id.videoId);
        console.log(response.items[1].id.videoId);

        $("#youtubeVid").append(`
            <iframe id="player" type="text/html" width="300" height="300"
            src="http://www.youtube.com/embed/${response.items[0].id.videoId}"
            frameborder="0"></iframe>
        `);
    });
});
