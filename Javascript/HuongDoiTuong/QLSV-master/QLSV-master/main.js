import { DanhSachSinhVien } from "./DanhSachSinhVien.js";
import { SinhVien } from "./SinhVien.js";

//Khởi tạo 1 danh sách sinh viên
var danhSachSinhVien = new DanhSachSinhVien();
SinhVien.prototype.MaSV = '';

//Xây dựng chức năng thêm sinh viên
function ThemSinhVien()
{
	var HoTen = document.getElementById('hoten').value;
	var MaSV = document.getElementById('masv').value;
	var CMND = document.getElementById('cmnd').value;
	var Email = document.getElementById('email').value;
	var SDT = document.getElementById('sdt').value;
	//Khởi tạo đối tượng sinh viên từ prototype SinhVien
	var sinhVienThem = new SinhVien(HoTen,Email,CMND,SDT);
	sinhVienThem.MaSV = MaSV;
	//Thêm sinh viên vào đối tượng danhsachsinhvien
	danhSachSinhVien.ThemSinhVien(sinhVienThem);
	//Gọi phương thức cập nhật listbox
	CapNhatDanhSachSinhVien();
}
function CapNhatDanhSachSinhVien()
{
	var lstBoxSinhVien = document.getElementById('lstDanhSachSinhVien');
	//Clear lstBoxSinhVien
	lstBoxSinhVien.innerHTML = '';
	//Duyệt DSSV từ đối tượng danhSachSinhVien
	for(var i = 0; i < danhSachSinhVien.DSSV.length; i++)
	{
		//Lấy đối tượng sinh viên từ mảng DSSV
		var sv = danhSachSinhVien.DSSV[i];
		//Tạo thẻ option
		var option = document.createElement('option');
		option.value = sv.MaSV;
		option.innerHTML = sv.HoTen;
		//Thêm thẻ option vào listbox
		lstBoxSinhVien.appendChild(option);
	}
}

//Thêm phương thức XoaSinhVien cho prototypeSinhVien
DanhSachSinhVien.prototype.XoaSV = function(arrSVDuocChon){
	//Duyệt mảng sinh viên được chọn với mảng danh sách sinh viên tìm ra sinh viên xóa
	for(var i=0; i<arrSVDuocChon.length;i++)
	{
		for(var j=0;j<this.DSSV.length;j++)
		{
			if(arrSVDuocChon[i] == this.DSSV[j].MaSV )
			{
				this.DSSV.splice(j,1);
			}
		}
	}
}
function XoaSinhVien()
{

		var r = confirm("Bạn có muốn xóa hay không ?");
		if (r == true) {
		//dom đến listbox sinh viên 
		var lstBoxSinhVien = document.getElementById('lstDanhSachSinhVien');
		var arrSVDuocChon = [];
		//Duyệt danh sách thẻ option từ listBoxSinhVien
		for(var i=0;i<lstBoxSinhVien.options.length;i++)
		{
			if(lstBoxSinhVien.options[i].selected)
			{
				var MaSV = lstBoxSinhVien.options[i].value;
				arrSVDuocChon.push(MaSV);
			}
		}
		//Gọi phương thức xóa sinh viên từ đối tượng danhSachSinhVien
		danhSachSinhVien.XoaSV(arrSVDuocChon);
		CapNhatDanhSachSinhVien();
		}
}