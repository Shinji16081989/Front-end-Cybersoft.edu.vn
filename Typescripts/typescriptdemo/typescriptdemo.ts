console.log("Hello typescript"); // ctrl + shift + B to build js file

function foo(){
    let x = 10;
    if (true){
        let x = 20;
        console.log(x); // x = 20 
    }
    console.log(x); // van la 10
}

class SinhVien{
    //thuoc tinh
    public hoten:string;
    public lop:string;
    constructor(HoTen:string,Lop:string)
    {
        this.hoten = HoTen;
        this.lop = Lop;
    }
    //Phuong Thuc
    public XuatThongTin()
    {
        console.log(`Ho va ten: ${this.hoten} Lop: ${this.lop}`);
    }
}

// Khoi Tao 1 doi tuong (instance)
let sv = new SinhVien("Nguyen Hai Dang", "FrontEnd3");
sv.XuatThongTin();

class NhanVien{
    public hoten:string;
    constructor(hoten){
        this.hoten = hoten;
    }
    public TinhLuong(){
        return 1000;
    }
}

class GiamDoc extends NhanVien{
    public quyen:string;
    constructor(name, Quyen){
        super(name);
        this.quyen= Quyen;
    }
    public TinhLuong(){
        return super.TinhLuong() + 2000;
    }
}

var giamDoc = new GiamDoc('Quang', 'Boss'); 
console.log(`Ho ten: ${giamDoc.hoten} - Quyen: ${giamDoc.quyen} - Luong: ${giamDoc.TinhLuong()}`);