/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = () => {
  $.get('/tweets').done(function(data) {
    renderTweets(data);
  });
};

const renderTweets = (tweets) => {
  $('.tweets-container').empty(); // Initialized tweets-container
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
        <div class="created-at">${timeago.format(data.created_at)}</div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
};

const submitTweet = () => {
  $('#tweet-form').submit(function(e) {
    e.preventDefault();

    const data = $(this).serializeArray();

    if (data.length === 0) {
      return;
    }

    const text = data[0].value;
    if (!text || text === ' '.repeat(text.length)) { // text must not be an empty string, null and space
      alert('Tweet must NOT be empty!');
      return;
    }

    if (text.length > 140) {
      alert('Tweet must be under 140 characters!');
      return;
    }

    $.post('/tweets', data).done(function() {
      $('#tweet-text').val(''); // Clear tweet form when post is success
      $('.counter').val(140); // reset counter
      loadTweets();
    });
  });
};

$(document).ready(function() {
  loadTweets();
  submitTweet();
});
