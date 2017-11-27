//New cac hinh
hinhChuNhat.prototype = new Hinh();

//hinh hinhVuong
hinhVuong.prototype = new Hinh();
//hinhTron
hinhTamGiac.prototype = new Hinh();
//truyen vao cac cong thuc

hinhTamGiac.prototype.chuvi = function(){
  return this.canh1* this.canh2 * this.canh3;
}

hinhVuong.prototype.chuvi = function(){
  return this.canh* 4;
}

hinhVuong.prototype.dientich = function(){
  return this.canh*this.canh;
}
// gan cac gia tri cho tham so de tinh toan

hinhChuNhat.prototype.chuvi = function(){
  return (this.chieudai + this.chieurong)*2;
}

hinhChuNhat.prototype.dientich = function(){
  return this.chieudai * this.chieurong;
}
