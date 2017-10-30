// ham nhap diem kiem tra hoc luc

function hocluc(diemnhap){
  var a = document.getElementById("nhapdiem");
  var diemnhap = parseInt(a.value);
  var thongBao = document.getElementById("thongbao");

  if (isNaN(diemnhap)){
    thongbao.innerHTML = "Vui long nhap so khong phai chu";
  }

  if (diemnhap > 10){
    thongBao.innerHTML = "Vui long nhap so duoi 10";
  }
  if (diemnhap >= 9 && diemnhap <= 10){
    thongBao.innerHTML = "Hoc Luc Xuat Sac";
  }
  if (diemnhap >= 8 && diemnhap <= 9){
    thongBao.innerHTML = "Hoc luc Gioi";
  }
  if (diemnhap >= 7 && diemnhap <= 8){
    thongBao.innerHTML = "Hoc luc Kha Gioi";
  }
  if (diemnhap >= 6 && diemnhap <= 7){
    thongBao.innerHTML = "Hoc luc Kha";
  }
  if (diemnhap >=5 && diemnhap <= 6){
    thongbao.innerHTML = "Hoc luc trung binh yeu";
  }
  if (diemnhap < 5){
    thongbao.innerHTML = "Ban nghi hoc dc roi!";
  }

}
