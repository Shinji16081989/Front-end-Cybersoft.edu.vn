#include "LOPHOC.h"



LOPHOC::LOPHOC()
{
}


LOPHOC::~LOPHOC()
{
}

void LOPHOC::Nhap() {
	cout << "Nhap si so lop: ";
	cin >> siso;

	dsHS = new HOCSINH*[siso];

	cout << "NHap danh sach lop: ";
	for (int i = 0; i < siso; i++)
	{
		/*HOCSINH *hs - new HOCSINH();
		hs->Nhap();
		dsHS[i] = hs;*/
		dsHS[i] = new HOCSINH();
		dsHS[i]->Nhap();
	}
}

void LOPHOC::Xuat() {
	cout << "Si so: " << siso << endl;
	for (int i = 0; i < siso; i++)
	{

	}
}