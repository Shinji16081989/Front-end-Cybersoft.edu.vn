//function tao table
function createTable()
{
  //nhap so cot va dong
  var soDong = document.getElementById("sodong");
  var soCot = document.getElementById("socot");
  var fulltable = document.getElementById('table_1')

  // chuyen thanh so
  var Dong = parseInt(soDong.value);
  var Cot = parseInt(soCot.value);

  // tao table
  var create_table = document.createElement("table");
  create_table.border = 1;

  //taodong
  for (i = 0; i <= Dong; i++) {
    var taodong = document.createElement("tr");
    create_table.appendChild(taodong);
  //taocot
    for (a = 0; a <= Cot; a++) {
      var taocot = document.createElement("td");
      taodong.appendChild(taocot);
      var textNode = document.createTextNode(i + "" + a);
      taocot.appendChild(textNode);
    }
  }
  fulltable.appendChild(create_table);
}
