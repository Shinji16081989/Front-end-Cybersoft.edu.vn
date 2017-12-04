var nhanVien = /** @class */ (function () {
    function nhanVien(Hoten, Manv, Luongcb) {
        this.hoten = Hoten;
        this.manv = Manv;
        this.luongcb = Luongcb;
    }
    nhanVien.prototype.TinhLuong = function () {
        if (this.loainv == 1) {
            return this.luongcb * 3;
        }
        else if (this.loainv == 2) {
            return this.luongcb * 2;
        }
        else {
            return this.luongcb;
        }
    };
    return nhanVien;
}());
var danhSachSV = /** @class */ (function () {
    function danhSachSV() {
        this.dssv = [];
    }
    danhSachSV.prototype.themNv = function (nvmoi) {
        this.dssv.push(nvmoi);
    };
    return danhSachSV;
}());
//# sourceMappingURL=NhanVien.js.map