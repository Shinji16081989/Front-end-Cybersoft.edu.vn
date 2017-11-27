#include "HOCSINH.h"



HOCSINH::HOCSINH()
{
}


HOCSINH::~HOCSINH()
{
}

void HOCSINH::Xuat() {
	cout << "Ho ten: " << HoTen << endl;
	cout << "Diem Toan" << DiemToan << endl;
	cout << "Diem Van" << DiemVan << endl;
}

void HOCSINH::Nhap() {
	cout << "Nhap ho ten: ";
	getline(cin, HoTen);
	cout << "Diem Toan: ";
	cin >> DiemToan;
	cout << "Diem Van";
	cin >> DiemVan;
}

float HOCSINH::TinhDTB() {

	return (DiemToan + DiemVan) / 2;
}

char* HOCSINH::Xeploai() {
	return Gioi;
}
