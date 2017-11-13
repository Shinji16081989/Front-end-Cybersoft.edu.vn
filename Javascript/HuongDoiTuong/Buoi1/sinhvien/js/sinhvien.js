var SinhVien = {
  ten: ABCZYZ,
  MaSoSV: 007,
  Toan: 7,
  Ly: 8,
  Hoa: 9,
  Dtb: function(){
    var diemTrungBinh = ((this.Toan + this.Ly + this.Hoa)/3);
    return diemTrungBinh;
  },
  XepLoai: function(diemTrungBinh){
    var diemTrungBinh = ((this.Toan + this.Ly + this.Hoa)/3);
    var xepLoai = document.getElementById('XepLoai');
    if (diemTrungBinh <= 10 && diemTrungBinh >=9){
      xepLoai.innerHTML("Ban la hoc sinh Xuat Sac");
    }else if (diemTrungBinh <=9 && diemTrungBinh >=8) {
      xeploai.innerHTML("Ban la hoc sinh Gioi");
    }else if (diemTrungBinh <=8 && diemTrungBinh >=7) {
      xepLoai.innerHTML("Ban la hoc sinh Kha");
    }else if (diemTrungBinh <=7 && diemTrungBinh >=6) {
      xepLoai.innerHTML("Ban la hoc sinh Trung Binh");
    }else if (diemTrungBinh <=6 && diemTrungBinh >=5) {
      xepLoai.innerHTML("Ban la hoc sinh Trung Binh - Yeu");
    }else{
      xepLoai.innerHTML("Ban la hoc sinh yeu");
    }
    return xepLoai;
  }
};
