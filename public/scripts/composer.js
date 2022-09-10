const charCounter = () => {
  $('#tweet-text').on('input', function() {
    const counter = 140 - $(this).val().replace(/\r?\n/g, '').length; // not count \r\n or n
    const counterColor = counter >= 0 ? '' : 'red';
    const counterDOM = $(this).next().children('.counter');

    counterDOM.val(counter);
    counterDOM.css('color', counterColor);
  });
};

const scrollBack = () => {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 120) {
      $('#scroll-button').show();
      $('.nav-new-tweet').hide();
    } else {
      $('#scroll-button').hide();
      $('.nav-new-tweet').show();
    }
  });

  $('#scroll-button').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 300, 'swing', function() {
      $('.nav-new-tweet').show();
      $('#scroll-button').hide();
      $('.new-tweet').slideDown(400);
      $('#tweet-text').focus();
    });
  });
};

$(document).ready(function() {
  charCounter();
  scrollBack();
});
