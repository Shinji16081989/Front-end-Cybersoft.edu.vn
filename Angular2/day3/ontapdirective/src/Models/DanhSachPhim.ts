import { Phim } from '../Models/Phim';
export class DanhSachPhim{
    DanhSachPhim:Array<Phim> = [];
    constructor(){

    }
    public ThemPhim(phim:Phim){
        this.DanhSachPhim.push(phim);
    }
}

// Model la noi chua cac lop doi tuong