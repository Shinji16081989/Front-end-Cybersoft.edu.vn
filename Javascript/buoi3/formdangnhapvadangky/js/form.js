function checkInput() {
  var bangThongBao = document.getElementById('thongbao');
  var Username = document.getElementById('tenDangNhap');
  var Password = document.getElementById('matKhau');

  Usernameval = Username.value;
  Passwordval = Password.value;
  //kiem tra user name
  if (Usernameval == "cybersoft" && Passwordval == "songle") {
    var Report = document.createElement("div");
    Report.innerHTML = "Dang nhap hop le";
    Report.style.backgroundColor = "yellow";
    bangThongBao.appendChild(Report);
  } else {
    var Report = document.createElement("div");
    Report.innerHTML = "Dang nhap ko hop le";
    Report.style.backgroundColor = "yellow";
    bangThongBao.appendChild(Report);
  }
  return false;
}

function TaoFormDangKy() {
  var hienThi = document.getElementById("HienThi");
  var mybr = document.createElement("br");
  var mybr_1 = document.createElement("br");
  var mybr_2 = document.createElement("br");
  var mybr_3 = document.createElement("br");

  var tenDangNhap = document.createElement("input");
  tenDangNhap.type = "text";
  tenDangNhap.id = "tendangnhap";
  tenDangNhap.placeholder = "Tên đăng ký";
  tenDangNhap.style.marginRight = "10px";
  tenDangNhap.style.marginTop = "10px";
  tenDangNhap.style.padding = "5px";
  tenDangNhap.style.borderRadius = "10px";
  tenDangNhap.style.fontSize = "20px";

  var matKhau = document.createElement("input");
  matKhau.type = "password";
  matKhau.placeholder = "Mật khẩu";
  matKhau.style.marginRight = "10px";
  matKhau.style.marginTop = "10px";
  matKhau.style.padding = "5px";
  matKhau.style.borderRadius = "10px";
  matKhau.style.fontSize = "20px";

  var DangNhap = document.createElement("button");
  DangNhap.innerHTML = "Đăng ký";
  DangNhap.style.marginRight = "10px";
  DangNhap.style.marginTop = "10px";
  DangNhap.style.padding = "5px";
  DangNhap.style.borderRadius = "10px";
  DangNhap.style.fontSize = "20px";

  var Email = document.createElement("input");
  Email.type = "text";
  Email.id = "email";
  Email.placeholder = "ten@mail.com";
  Email.style.marginRight = "10px";
  Email.style.marginTop = "10px";
  Email.style.padding = "5px";
  Email.style.borderRadius = "10px";
  Email.style.fontSize = "20px";

  var ngheNghiep = document.createElement("div");
  ngheNghiep.innerHTML = "Bạn là : ";

  var sinhVien = document.createElement("input");
  sinhVien.setAttribute("type", "radio");
  var nghesinhVien = document.createElement("span");
  nghesinhVien.innerHTML = "Sinh viên";
  ngheNghiep.appendChild(sinhVien);
  ngheNghiep.appendChild(nghesinhVien);


  var diLam = document.createElement("input");
  diLam.setAttribute("type", "radio");
  diLam.name = "nghe";
  ngheNghiep.appendChild(diLam);
  var ngheDiLam = document.createElement("span");
  ngheDiLam.innerHTML = "Đã đi làm";
  ngheNghiep.appendChild(ngheDiLam);



  hienThi.appendChild(tenDangNhap);
  hienThi.appendChild(mybr_1);
  hienThi.appendChild(matKhau);
  hienThi.appendChild(mybr);
  hienThi.appendChild(Email);
  hienThi.appendChild(mybr_2);
  hienThi.appendChild(ngheNghiep);

  hienThi.appendChild(mybr_3);
  hienThi.appendChild(DangNhap);



}
