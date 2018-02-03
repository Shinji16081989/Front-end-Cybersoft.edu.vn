"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien = /** @class */ (function () {
    // ham khoi tao
    function NhanVien(manv, hoten, luongcb, loainv) {
        this.MaNV = manv;
        this.HoTen = hoten;
        this.LuongCB = luongcb;
        this.LoaiNV = loainv;
    }
    //hamxuly
    NhanVien.prototype.TongLuong = function () {
        var tongluong = 0;
        // ham switchcase xu ly du lieu tinh luong
        switch (this.LoaiNV) {
            case 1:
                {
                    tongluong = this.LuongCB;
                }
                ;
                break;
            case 2:
                {
                    tongluong = this.LuongCB * 1.5;
                }
                ;
                break;
            case 3:
                {
                    tongluong = this.LuongCB * 3;
                }
                ;
                break;
            default:
                {
                    tongluong = this.LuongCB;
                }
                ;
                break;
        }
        return tongluong;
    };
    NhanVien.prototype.LayTenLoaiNhanVien = function () {
        switch (this.LoaiNV) {
            case 1:
                {
                    return "Nhan Vien Thuong";
                }
                ;
            case 2:
                {
                    return "Quan Ly";
                }
                ;
            case 3:
                {
                    return "Sep";
                }
                ;
            default: return "Nhan Vien Thuong";
        }
    };
    return NhanVien;
}());
exports.NhanVien = NhanVien;
//# sourceMappingURL=NhanVien.js.map