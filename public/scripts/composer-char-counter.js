$(document).ready(function() {
  $('#tweet-text').on('input', function(e) {
    const counter = 140 - $(this).val().length;
    const counterDOM = $(this).next().children('.counter');
    counterDOM.val(counter);
    if (counter < 0) {
      counterDOM.css('color', 'red');
    }
  });
});
