class nhanVien{
    public hoten:string;
    public manv:number;
    public luongcb:number;
    public loainv:number;
    constructor(Hoten:string,Manv:number,Luongcb:number){
        this.hoten = Hoten;
        this.manv = Manv;
        this.luongcb = Luongcb;
    }
    TinhLuong():number{
        if (this.loainv == 1){
            return this.luongcb * 3;
        }else if (this.loainv == 2){
            return this.luongcb *2;
        }else{
            return this.luongcb;
        }
    }
}

class danhSachSV{
    public dssv: Array<nhanVien> = [];
    public themNv(nvmoi:nhanVien){
        this.dssv.push(nvmoi);
    }
}