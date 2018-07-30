$("#search").on("click", function () {
    var query = $("#searchInput").val().trim();

    console.log(query);

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=kitties&type=video&key=AIzaSyDVsUtmRBT_SXAPJCGmS3JFxLHMWJ0ZDbA",
        method: "GET"
    }).then(function(response)  {
        console.log(response);
        console.log(response.items);

        $("#youtubeVid").append(response.items[0]);
    });
});
