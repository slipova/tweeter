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
  // create new DOM element: article
  const createTweetElement = function(tweetData) {


    // create structure for different parts of the article: header, tweet-text, footer
    return (`<article class="tweet">
  <header><div class="image-name">
  <img src="${tweetData.user.avatars}"><div>${tweetData.user.name}</div></div><div>${tweetData.user.handle}</div>
  </header>
    <p>${tweetData.content.text}</p>
    <footer>
          <div class="time">${tweetData.created_at}</div>

          <div class="icons">
            <i class="fas fa-flag icons"></i>
            <i class="fas fa-retweet icons"></i>
            <i class="fas fa-heart icons"></i>
          </div>
        </footer>
        </article>`);
  }


  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);
})


