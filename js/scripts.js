$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sc1 = parseInt($("input:radio[name=place]:checked").val());
    var sc2 = parseInt($("input:radio[name=ethics]:checked").val());
    var sc3 = parseInt($("input:radio[name=color]:checked").val());
    var sc4 = parseInt($("input:radio[name=subject]:checked").val());
    var sc5 = parseInt($("input:radio[name=flavor]:checked").val());
    var total = sc1 + sc2 + sc3 + sc4 + sc5 ;

    if (total >= 5 && total <= 7) {
      $(".storyHar").show();
    } else if (total >= 8 && total <= 9) {
      $(".storyRon").show();
    } else if (total >=10 && total <= 12){
      $(".storySir").show();
    } else if (total >= 13 && total < 14) {
      $(".storyHer").show();
    } else if (total === 15){
      $(".storyDumb").show();
    }
  });
});
