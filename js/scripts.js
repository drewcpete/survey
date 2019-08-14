$(document).ready(function() {
  $(".questions").submit(function(event) {
    var day = $("#favDay").val();
    var people = $("input:radio[name=people1]:checked").val();
    var games1 = $("#games1").val();
    var food = $("#food").val();

    $(".games1").text(games1);
    $(".people").text(people);
    $(".food").text(food);
    $(".day").text(day);

    $(".results").show();

    event.preventDefault();
  });
});
