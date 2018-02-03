import {NhanVien} from "./NhanVien";
import {DanhSachNV} from "./DanhSachNhanVien";

let dsnv = new DanhSachNV();

function ThemNhanVien(){
    //lay du lieu nhap vao
    let manv:any = parseInt((<HTMLInputElement>document.getElementById("manv")).value);
    let hoten:string = ((<HTMLInputElement>document.getElementById("hoten")).value);
    let luongcb:any = parseInt((<HTMLInputElement>document.getElementById("luongcb")).value);
    let loainv:number = 1;
    // duyet mang loai nv
    let rdbloainhanvien:any = document.getElementsByName('loainv');

    for (let rdbcheck of rdbloainhanvien) {
        if (rdbcheck.checked) {
            loainv = parseInt(rdbcheck.value);
        }
    }
    //khoi tao doi tuong nhanvien
    let nhanvien = new NhanVien(manv, hoten, luongcb, loainv);
    //them danh sach nhan vien
    dsnv.ThemNhanVien(nhanvien);

    CapNhatDanhSachNhanVien();
}

    //Cap nhat Danh Sach Nhan Vien   
function CapNhatDanhSachNhanVien()
{
    // dom den tbody
    let CapNhat = document.getElementById('capnhatnhanvien');
    //Clear
    CapNhat.innerHTML = '';

    //Duyet mang
    for (let nv of dsnv.DanhSachNV) {
       let tdMaNV:any = taoTD("MaNV", nv.MaNV);
       let tdHoTen:any = taoTD("HoTen", nv.HoTen); 
       let tdLuongCB:any = taoTD("MaNV", nv.LuongCB); 
       let tdLoaiNV:any = taoTD("MaNV", nv.LayTenLoaiNhanVien());  
       let tdTongLuong:any = taoTD("MaNV", nv.TongLuong());
       //tao tr
       let trNhanVien = document.createElement('tr');
       trNhanVien.appendChild(tdMaNV);
       trNhanVien.appendChild(tdHoTen);
       trNhanVien.appendChild(tdLuongCB);
       trNhanVien.appendChild(tdLoaiNV);
       trNhanVien.appendChild(tdTongLuong);
       CapNhat.appendChild(trNhanVien);
    }
}

function taoTD(className, Value)
{
    let td = document.createElement('td');
    td.className = className;
    td.innerHTML = Value;
    return td;
}

document.getElementById('ThemNV').addEventListener('click', ThemNhanVien);