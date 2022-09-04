/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (data) => {
  return $(`
    <article>
      <header>
        <div class="tweet-info">
          <img src="${data.user.avatars}">
          <div class="name">${data.user.name}</div>
        </div>
        <div class="tweet-account">
          ${data.user.handle}
        </div>
      </header>
      <div class="tweet">${data.content.text}</div>
      <footer>
        <div class="created-at">${data.created_at}</div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
};

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
  const $tweet = createTweetElement(tweetData);
  $('.tweets-container').append($tweet);
});
