/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = () => {
  $.get('/tweets', function(data, success) {
    if (success === 'success') {
      renderTweets(data);
    }
  });
};

const renderTweets = (tweets) => {
  tweets.sort((a, b) => b.created_at - a.created_at); // sort by created_at desc
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-container').append($tweet);
  }
};

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

$(document).ready(function() {
  loadTweets();
  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    $.post('/tweets', $('#tweet-form').serialize());
  });
});
