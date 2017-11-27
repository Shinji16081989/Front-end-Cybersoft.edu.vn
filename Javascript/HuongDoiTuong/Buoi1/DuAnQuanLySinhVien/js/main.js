var danhSachSinhVien = new DanhSachSV();
SinhVien.prototype.MaSV = "";

//chuc nang them sinh SinhVien
function ThemSinhVien() {
  var HoTen = document.getElementById('hoten').value;
  var MaSV = document.getElementById('masv').value;
  var Email = document.getElementById('email').value;
  var Cmnd = document.getElementById('cmnd').value;
  var SoDT = document.getElementById('sdt').value;

  var sinhvienthem = new SinhVien(HoTen, Email, Cmnd, SoDT);
  sinhvienthem.MaSV = MaSV;
  //them sinh vien vao doi tuong danhSachSinhVien
  danhSachSinhVien.ThemSinhVien(sinhvienthem);

  CapNhatDanhSachSinhVien();
}

function CapNhatDanhSachSinhVien() {
  console.log(danhSachSinhVien.dsSinhVien);
  var tbodySinhVien = document.getElementById('tblSinhVien');
  tbodySinhVien.innerHTML = '';
  //Duyet DSSV tu doi tuong
  for (var i = 0; i < danhSachSinhVien.dsSinhVien.length; i++) {


    var sv = danhSachSinhVien.dsSinhVien[i];
    // tao tr va td
    var trSinhVien = document.createElement('tr');
    //
    var tdCkbSV = document.createElement('td');

    var ckbMaSV = document.createElement('input');
    ckbMaSV.setAttribute('type', 'checkbox');
    ckbMaSV.value = sv.MaSV;
    ckbMaSV.classname = "ckbMaSV";
    //tao td sinh vien
    tdCkbSV.appendChild(ckbMaSV);
    //tao tr sinh SinhVien
    trSinhVien.appendChild(tdCkbSV);


    var tdHoten = TaoTheTD('HoTen', sv.HovaTen);
    var tdMaSV = TaoTheTD('MaSV', sv.MaSV);
    var tdCMND = TaoTheTD('CMND', sv.Cmnd);
    var tdSoDT = TaoTheTD('SODT', sv.SoDt);
    var tdEmail = TaoTheTD('Email', sv.Email);
    //append td va tr
    trSinhVien.appendChild(tdHoten);
    trSinhVien.appendChild(tdMaSV);
    trSinhVien.appendChild(tdCMND);
    trSinhVien.appendChild(tdSoDT);
    trSinhVien.appendChild(tdEmail);

    //them option vao list lstboxSinhVien
    tbodySinhVien.appendChild(trSinhVien);
  }
}

function TaoTheTD(ClassName, Value) {
  var td = document.createElement('td');
  td.className = ClassName;
  td.innerHTML = Value;
  return td;
}


// them phuong thuc xoa sv
DanhSachSV.prototype.XoaSV = function(arraySinhVienduocChon) {
  //Tim ra sinh vien de XoaS
  for (var i = 0; i < arraySinhVienduocChon.length; i++) {
    for (var j = 0; j < this.dsSinhVien.length; j++) {
      if (arraySinhVienduocChon[i] == this.dsSinhVien[j].MaSV) {
        this.dsSinhVien.splice(j, 1);
      }
    };
  }
}

function XoaSinhVien() {
  var check = confirm("ban co muon xoa khong?")
  if (check = true) {
    var lstMaSV = document.getElementsByClassName('ckbMaSV');
    var arraySinhVienduocChon = [];

    // Danh sach sv theoption
    for (var i = 0; i < lstMaSV.length; i++) {
      if (arraySinhVienduocChon[i].checked) {
        var MaSV = lstMaSV[i].value;
        arraySinhVienduocChon.push(MaSV);
      }
    }

    danhSachSinhVien.XoaSV(arraySinhVienduocChon);
    CapNhatDanhSachSinhVien();
  }
}
