#pragma once
#include <iostream>
#include "HOCSINH.h"

using namespace std;
class LOPHOC
{

private:
	int siso;
	HOCSINH **dsHS;
public:
	LOPHOC();
	~LOPHOC();

	void Nhap();
	void Xuat();
	float TinhDTBChung();

};

