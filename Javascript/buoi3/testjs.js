function sum(x,y)
{
  tong = x + y;
  return tong;
}

var x = sum(20,30)
console.log(x)

function nhap(giatri)
{
  if (giatri == 8) {
    console.log("sotam");
  }else if (giatri == 9){
    alert("gia tri bang 9");
  }else{
    alert("gia tri ko phai 8 va 9");
  }
}

function KiemTraHocLuc(dtb)
{
  switch (dtb) {
    case dtb = 8:
      thongBao = "Hoc luc gioi";
      break;
      case dtb = 7:
        thongBao = "Hoc luc kha";
        break;
        case dtb = 6:
          thongBao = "Hoc luc trung binh";
          break;
          case dtb = 5:
            thongBao = "Hoc luc trung binh yeu";
            break;
            case dtb = 4:
              thongBao = "Hoc luc gyeu";
              break;
  }
  alert(thongBao);
}


function xuat10lan(){
  for (var i = 0; i < 10; i++) {
    document.write("Xin Chao, my class! lan thu " + i + "<br>");
  }
}

function xuatSoLe(){
  document.write("Chuong trinh xuat so le" + "<br>");
  for (var i = 0; i < 100; i++) {
    if (i % 2 != 0) {
      document.write("so le thu " + i + "<br>");
    }
  }
}

function xuatSoChan(){
  document.write("Chuong trinh xuat so chan" + "<br>");
  for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      document.write("so chan thu " + i + "<br>");
    }
  }
}

function vongLapWhile(arg1){
  i = 0;
  while (i < arg1) {
    document.write("so thu " + i + "<br>");
    i += 2;
  }
}

function ThayDoiMau(choose){
  var thaydoi = document.getElementById('testcolor');
  if (choose == 1) { //focus
    thaydoi.style.border = "4px solid blue";
  }else {//onblur
    thaydoi.style.border = "4px solid red";
  }
}

function thayDoiChon(){
  var theSpan = document.getElementById('xuat');
  var dropdown = document.getElementById('chon');
  theSpan.innerHTML = dropdown.value;
}

function ThayDoiMouse(thamSo){
  var mouse = document.getElementById('nut');

  if (thamSo ==1) { //hover
    mouse.style.backgroundColor = "red";
  }else if (thamSo == 2) { //out
    mouse.style.backgroundColor = "blue";
  }else if (thamSo == 3) { //down
    mouse.style.backgroundColor = "green";
    mouse.style.color = "white";
  }else if (thamSo == 4)
}
