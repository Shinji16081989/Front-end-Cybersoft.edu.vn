// Cách tốt nhất
// var numberList = $("#inputNumber");
// var sum = $("#Sum");
// var showSum = $('#kqSum');

// function tinhtong() {
//   var numberSplit = numberList.val().split(',');
//   console.log(numberSplit);
//   console.log("abc");
//   var total = 0;
//   for (var i = 0; i < numberSplit.length; i++) {
//     numberSplit[i] = parseInt(numberSplit[i]);
//     total += numberSplit[i];
//   };
//   console.log(total);
//   showSum.text("Tổng giá trị là: " + total);
// }
//
// $(document).ready(function () {
//   sum.bind("click", tinhtong);
// });


// $(document).ready(function () {
//   var numberList = $("#inputNumber");
//   var sum = $("#Sum");
//   var showSum = $('#kqSum');
//
//   function tinhtong() {
//     var numberSplit = numberList.val().split(',');
//     var total = 0;
//     for (var i = 0; i < numberSplit.length; i++) {
//       numberSplit[i] = parseInt(numberSplit[i]);
//       total += numberSplit[i];
//     };
//     console.log(total);
//     showSum.text("Tổng giá trị là: " + total);
//   }
//
//   sum.bind("click", tinhtong);
// });

$(document).ready(function () {
  var numberList = $("#inputNumber");
  var sum = $("#Sum");
  var showSum = $('#kqSum');

  sum.bind("dblclick", function tinhtong() {
    var numberValue = numberList.val();
    var numberSplit = numberValue.split(',');
    var total = 0;
    for (var i = 0; i < numberSplit.length; i++) {
      numberSplit[i] = parseInt(numberSplit[i]);
      total += numberSplit[i];
    };
    console.log(total);
    showSum.text("Tổng giá trị là: " + total).css({"background-color": "yellow", "font-size": "2em", "text-align": "center" });
    showSum.fadeOut("slow");
  });
});
