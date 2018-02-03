import {NhanVien} from "./NhanVien"
export class DanhSachNV{
    public DanhSachNV:Array<NhanVien> = new Array<NhanVien>();
    constructor()
    {

    }
    public ThemNhanVien(NhanVienThem:NhanVien)
    {
        this.DanhSachNV.push(NhanVienThem);        
    }
}