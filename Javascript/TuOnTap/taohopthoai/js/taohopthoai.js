function TaoThongBao(){
  alert("day la alert");
}

function XacNhan(){
  var nhap = confirm("Ban da like fanpage minh chua?")

  if (nhap) {
    document.write("thank ban da like");
  }else{
    document.write("like di roi noi chuyen tiep");
  }
}

function nhapThongTin(){
  var nhapthongtin =  prompt("Nhap ten ban vao");
  document.write(nhapthongtin);
}
