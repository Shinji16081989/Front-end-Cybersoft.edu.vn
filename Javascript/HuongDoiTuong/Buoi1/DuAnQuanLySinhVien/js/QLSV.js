function SinhVien(hovaten, cmnd, email, sodt) {
  this.HovaTen = hovaten;
  this.Cmnd = cmnd;
  this.Email = email;
  this.SoDt = sodt;
}
SinhVien.prototype.SVcode = mssv;
//daslkdjalkdjakls
function DanhSachSV() {
  //hoac this.dsSinhVien = []
  var dsSinhVien = [];

  //Danh sach method
  this.TimSinhVien = function (msSV){

  }
}

var dssv = new DanhSachSV();
var dang = new Student(NguyenHaiDang, 011, dadadsa,091230);
dssv.dsSinhVien.push(dang);

// function MonHoc(toan, ly, hoa) {
//   this.Toan = toan;
//   this.Ly = ly;
//   this.Hoa = hoa;
//   this.diemTB = function() {
//     return (this.Toan + this.Ly + this.Hoa) / 3;
//   }
// }
