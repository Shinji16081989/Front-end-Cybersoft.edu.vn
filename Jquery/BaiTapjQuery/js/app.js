$(document).ready(function() {
  $(document).keypress(function(e) {
    if(e.which == 13) {
      $("#btnInput").trigger("click");
    }
});
  $('#btnInput').click(function() {
    var inputContent = $('#Input').val();
    var NoiDungCauHoi = '<div class="NoiDungCauHoi">';
    for (i = 1; i <= inputContent; i++) {
      var cauHoi = "<div class='cauhoi' MaCauHoi='" + i + "'>";
      cauHoi = cauHoi + "<h3>Cau Hoi " + i + "</h3>";
      var cauTraLoi = "<div class='DanhSachCauTraLoi'>";
      //random cau tra loi NoiDungCauHoi
      var vitriDung = Math.floor((Math.random() * 4) + 1);
      var cauTraLoi = "";
      cauTraLoi = cauTraLoi + "<h6>" + "<input type='radio' class='answerID' name='" + i + "' macautraloi='tl_1'>" + " Dap An 1" + "</h6>";
      cauTraLoi = cauTraLoi + "<h6>" + "<input type='radio' class='answerID' name='" + i + "' macautraloi='tl_2'>" + " Dap An 2" + "</h6>";
      cauTraLoi = cauTraLoi + "<h6>" + "<input type='radio' class='answerID' name='" + i + "' macautraloi='tl_3'>" + " Dap An 3" + "</h6>";
      cauTraLoi = cauTraLoi + "<h6>" + "<input type='radio' class='answerID' name='" + i + "' macautraloi='tl_4'>" + " Dap An 4" + "</h6>";
      cauTraLoi = cauTraLoi + "</div>";
      cauHoi += cauTraLoi;
      cauHoi = cauHoi + "</div>";
      NoiDungCauHoi += cauHoi;
      $("#DanhSachCauHoi").html(NoiDungCauHoi);
    }
  });

  $('body').delegate(".answerID", "click", function(){
    var idQuestion = $(this).closest('.cauhoi').attr('MaCauHoi');
    var idAnswer = $(this).attr('macautraloi');
    alert("Cau hoi " + idQuestion + " ban chon cau tra loi " + idAnswer);
  });


})
