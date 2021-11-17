$(document).ready(function() {

  const $input = $("#tweet-text");
  $input.on('input', function() {
    const charactersUsed = $input.val().length
    const $counter = $(".counter")
    let charactersRemaining = 140 - charactersUsed;

    if (charactersRemaining < 0) {
      $counter.addClass("red");

    } else {
      $counter.removeClass("red");
    }

    $counter[0].value = charactersRemaining;

    // alternative (this.value.length)
  });
})