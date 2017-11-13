function nhapThongTin(){
  var ten = document.getElementById('tenDangNhap');
  var matkhau = document.getElementById('matKhau');
  var thongBao = document.getElementById('SignInTxt');

  tenval = ten.value;
  matkhauval = matkhau.value;

  if (tenval == "cybersoft" && matkhauval == "songle") {
    var bangThongBao = document.createElement('div');
    bangThongBao.innerHTML = "Dang Nhap Hop Le";
    bangThongBao.style.backgroundColor = "yellow";
    thongBao.appendChild(bangThongBao);
  }else {
    var bangThongBao = document.createElement('div');
    bangThongBao.innerHTML = "Dang Nhap Ko Hop Le";
    bangThongBao.style.backgroundColor = "red";
    thongBao.appendChild(bangThongBao);
  }
  return false;
}

function checkSinhVien(){
  var laSinhVien = document.getElementById('laSinhVien');
  var koLaSinhVien =  document.getElementById('koLaSinhVien');
  var thongBao = document.getElementById('SignUptxt');

  if (laSinhVien.checked){
    var input_1 = document.createElement('div');
  }
}
