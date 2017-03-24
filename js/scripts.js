$(document).ready(function(){

  $("#quiz").submit(function(){

    var age = parseInt($("#age").val());
    var name = $("#name").val();
    var result = "Thanks " + name + ", here is your batman universe character:"
    event.preventDefault();

    $(".home").hide();
    $(".result").html(result);

    if (age <= 25) {
    $("#joker").show();
  } else if ((age >= 26) && (age < 50)) {
      $("#batman").show();
    } else {
      $("#riddler").show();
    };

    this.reset();





  });
});
