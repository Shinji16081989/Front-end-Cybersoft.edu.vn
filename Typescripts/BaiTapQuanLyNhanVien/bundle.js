/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = __webpack_require__(2);
var DanhSachNhanVien_1 = __webpack_require__(3);
var dsnv = new DanhSachNhanVien_1.DanhSachNV();
function ThemNhanVien() {
    //lay du lieu nhap vao
    var manv = parseInt(document.getElementById("manv").value);
    var hoten = (document.getElementById("hoten").value);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DanhSachNV = /** @class */ (function () {
    function DanhSachNV() {
        this.DanhSachNV = new Array();
    }
    DanhSachNV.prototype.ThemNhanVien = function (NhanVienThem) {
        this.DanhSachNV.push(NhanVienThem);
    };
    return DanhSachNV;
}());
exports.DanhSachNV = DanhSachNV;
//# sourceMappingURL=DanhSachNhanVien.js.map

/***/ })
/******/ ]);