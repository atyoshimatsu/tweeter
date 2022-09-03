$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const counter = 140 - $(this).val().length;
    const counterColor = counter >= 0 ? '' : 'red';
    const counterDOM = $(this).next().children('.counter');

    counterDOM.val(counter);
    counterDOM.css('color', counterColor);
  });
});
