"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = require("./NhanVien");
var DanhSachNhanVien_1 = require("./DanhSachNhanVien");
var dsnv = new DanhSachNhanVien_1.DanhSachNV();
function ThemNhanVien() {
    //lay du lieu nhap vao
    var manv = parseInt(document.getElementById("manv").value);
    var hoten = document.getElementById("hoten");
    var luongcb = parseInt(document.getElementById("luongcb").value);
    var loainv = 1;
    // duyet mang loai nv
    var rdbloainhanvien = document.getElementsByName('loainv');
    for (var _i = 0, rdbloainhanvien_1 = rdbloainhanvien; _i < rdbloainhanvien_1.length; _i++) {
        var rdbcheck = rdbloainhanvien_1[_i];
        if (rdbcheck.checked) {
            loainv = parseInt(rdbcheck.value);
        }
    }
    //khoi tao doi tuong nhanvien
    var nhanvien = new NhanVien_1.NhanVien(manv, hoten, luongcb, loainv);
    //them danh sach nhan vien
    dsnv.ThemNhanVien(nhanvien);
    CapNhatDanhSachNhanVien();
}
//Cap nhat Danh Sach Nhan Vien   
function CapNhatDanhSachNhanVien() {
    // dom den tbody
    var CapNhat = document.getElementById('capnhatnhanvien');
    //Clear
    CapNhat.innerHTML = '';
    //Duyet mang
    for (var _i = 0, _a = dsnv.DanhSachNV; _i < _a.length; _i++) {
        var nv = _a[_i];
        var tdMaNV = taoTD("MaNV", nv.MaNV);
        var tdHoTen = taoTD("HoTen", nv.HoTen);
        var tdLuongCB = taoTD("MaNV", nv.LuongCB);
        var tdLoaiNV = taoTD("MaNV", nv.LayTenLoaiNhanVien());
        var tdTongLuong = taoTD("MaNV", nv.TongLuong());
        //tao tr
        var trNhanVien = document.createElement('tr');
        trNhanVien.appendChild(tdMaNV);
        trNhanVien.appendChild(tdHoTen);
        trNhanVien.appendChild(tdLuongCB);
        trNhanVien.appendChild(tdLoaiNV);
        trNhanVien.appendChild(tdTongLuong);
        CapNhat.appendChild(trNhanVien);
    }
}
function taoTD(className, Value) {
    var td = document.createElement('td');
    td.className = className;
    td.innerHTML = Value;
    return td;
}
document.getElementById('ThemNV').addEventListener('click', ThemNhanVien);
//# sourceMappingURL=main.js.map