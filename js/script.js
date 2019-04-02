// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function() {

    var searchTerm = $("#search-term").val();
    console.log(searchTerm);
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            var randomNum = Math.floor(Math.random()*(response.data.length));
            $('.text-center').html('<img src="' + response.data[randomNum].images.original.url + '">');

        },
    });

});

