/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}




$(document).ready(function() {


  const createTweetElement = function(tweetData) {

    return (`<article class="tweet">
    <header><div class="image-name">
    <img src="${tweetData.user.avatars}"><div>${tweetData.user.name}</div></div><div>${tweetData.user.handle}</div>
    </header>
    <p>${tweetData.content.text}</p>
    <footer>
    <div class="time">${timeago.format(tweetData.created_at)}</div>
    
    <div class="icons">
    <i class="fas fa-flag icons"></i>
    <i class="fas fa-retweet icons"></i>
    <i class="fas fa-heart icons"></i>
    </div>
    </footer>
    </article>`);
  }

  const $tweet = createTweetElement(tweetData);

  // console.log($tweet);
  $('#tweets-container').append($tweet);



  const renderTweets = function(tweets) {

    tweets.forEach((tweetObj) => $('#tweets-container').prepend(createTweetElement(tweetObj)))
  }




  $("form").submit((event) => {
    event.preventDefault();

    let data = $(".create-tweet").serialize();
    if (data === "text=" || data === null) {
      alert("Please enter a message")
    } else if (data.length > 145) {
      alert("Maximum characters exceeded")
    } else {

      $.post("/tweets", data)
        .then(() => {
          loadTweets();
        })
    }

  })

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        renderTweets(data)

      });
  }

  loadTweets();

})





