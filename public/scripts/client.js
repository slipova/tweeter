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
};




$(document).ready(function() {

  const createTweetElement = function(tweetData) {
    //cross-site scripting
    const escape = function(str) {
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(str));
      return p.innerHTML;
    };

    return (`<article class="tweet">
    <header class="tweet-profile"><div class="image-name">
    <img src="${tweetData.user.avatars}"><div>${tweetData.user.name}</div></div>
    <div>${tweetData.user.handle}</div>
    </header>
    <p>${escape(tweetData.content.text)}</p>
    <footer>
    <div class="time">${timeago.format(tweetData.created_at)}</div>
    
    <div class="icons">
    <i class="fas fa-flag icons"></i>
    <i class="fas fa-retweet icons"></i>
    <i class="fas fa-heart icons"></i>
    </div>
    </footer>
    </article>`);
  };


  const $tweet = createTweetElement(tweetData);
  $('#tweets-container').append($tweet);


  const renderTweets = function(tweets) {
    tweets.forEach((tweetObj) => $('#tweets-container').prepend(createTweetElement(tweetObj)));
  };


  $("form").submit((event) => {
    event.preventDefault();

    const $errorMessage = $("#error");
    let data = $(".create-tweet").serialize();

    if (data === "text=" || data === null) {
      $errorMessage.slideDown();
      $errorMessage.html(`<i class="fas fa-exclamation-triangle"></i> Please enter a message <i class="fas fa-exclamation-triangle"></i>`);

    } else if (data.length > 145) {
      $errorMessage.slideDown();
      return $errorMessage.html(`<i class="fas fa-exclamation-triangle"></i> Maximum characters exceeded <i class="fas fa-exclamation-triangle"></i>`);

    } else {
      $errorMessage.hide();
      $.post("/tweets", data)
        .then(() => {
          $('textarea').val('');
          loadTweets();
        });
    }
  });

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        $(".counter").val("140");
        renderTweets(data)

      });
  };

  loadTweets();


  const showTweetContainer = function() {
    $("#nav-arrow").click(() => {
      $(".new-tweet").show(1000);
    })
  }

  showTweetContainer();

});





