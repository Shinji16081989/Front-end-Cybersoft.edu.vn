var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello typescript"); // ctrl + shift + B to build js file
function foo() {
    var x = 10;
    if (true) {
        var x_1 = 20;
        console.log(x_1); // x = 20 
    }
    console.log(x); // van la 10
}
var SinhVien = /** @class */ (function () {
    function SinhVien(HoTen, Lop) {
        this.hoten = HoTen;
        this.lop = Lop;
    }
    //Phuong Thuc
    SinhVien.prototype.XuatThongTin = function () {
        console.log("Ho va ten: " + this.hoten + " Lop: " + this.lop);
    };
    return SinhVien;
}());
// Khoi Tao 1 doi tuong (instance)
var sv = new SinhVien("Nguyen Hai Dang", "FrontEnd3");
sv.XuatThongTin();
var NhanVien = /** @class */ (function () {
    function NhanVien(hoten) {
        this.hoten = hoten;
    }
    NhanVien.prototype.TinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(name, Quyen) {
        var _this = _super.call(this, name) || this;
        _this.quyen = Quyen;
        return _this;
    }
    GiamDoc.prototype.TinhLuong = function () {
        return _super.prototype.TinhLuong.call(this) + 2000;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc('Quang', 'Boss');
console.log("Ho ten: " + giamDoc.hoten + " - Quyen: " + giamDoc.quyen + " - Luong: " + giamDoc.TinhLuong());
//# sourceMappingURL=typescriptdemo.js.map