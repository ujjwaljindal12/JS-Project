$( document ).ready(function() 
                    { 
 $("#button").on("click", function() {
        $.getJSON("https://api.icndb.com/jokes/random?exclude=[explicit]", function(json) { 
          $("#quote").html((json.value.joke));
          updateTweet(json);
        });
});
});
function updateTweet(json) {
          var thisQuote = json.value.joke;
          $("#twitterButton").attr("href", "https://twitter.com/intent/tweet?text=" + thisQuote + "%0a--- ");
}