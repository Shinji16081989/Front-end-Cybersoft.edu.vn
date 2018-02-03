export class NhanVien{
    public MaNV: number;
    public HoTen: string;
    public LuongCB: number;
    public LoaiNV: number;
    // ham khoi tao
    constructor(manv:number, hoten:string, luongcb:number, loainv:number)
    {
        this.MaNV = manv;
        this.HoTen = hoten;
        this.LuongCB = luongcb;
        this.LoaiNV = loainv;
    }
    //hamxuly
    public TongLuong():number {
        let tongluong = 0;
        // ham switchcase xu ly du lieu tinh luong
        switch(this.LoaiNV){
            case 1: { tongluong = this.LuongCB}; break;
            case 2: { tongluong =  this.LuongCB * 1.5}; break;
            case 3: { tongluong = this.LuongCB * 3}; break;
            default: { tongluong = this.LuongCB}; break;
        }
        return tongluong;
    }

    public LayTenLoaiNhanVien():string {
        switch(this.LoaiNV){
            case 1: { return "Nhan Vien Thuong"};
            case 2: { return "Quan Ly" };
            case 3: { return "Sep"};
            default: return "Nhan Vien Thuong";
        }
    }

}