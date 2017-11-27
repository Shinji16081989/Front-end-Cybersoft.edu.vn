#pragma once
#include <iostream>
#include <string>
using namespace std;
class HOCSINH
{

private:
	char HoTen[50];
	float DiemToan;
	float DiemVan;
public:
	HOCSINH();
	~HOCSINH();

	void Nhap();
	void Xuat();
	float TinhDTB();
	char* Xeploai();
};

