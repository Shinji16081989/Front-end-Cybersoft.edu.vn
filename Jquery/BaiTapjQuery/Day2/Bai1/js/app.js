$('.tabMenu').click(function() {
  $('.tab').hide();
  var tabname = "." + $(this).attr("tabName");
  var i=0;
  while (i<100) {
    $(tabname).fadeOut(500);
    $(tabname).fadeIn(500).css("color", "green");
    $(tabname).fadeOut(500);
    $(tabname).fadeIn(500).css("color", "pink");
    i++;
  }


});
