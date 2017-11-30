#pragma once
#include <iostream>
using namespace std;

class PHANSO
{
private:
	int tuso;
	int mauso;
public:
	PHANSO();
	~PHANSO();

	void Nhap();
	void Xuat();
	PHANSO Cong(PHANSO);

	PHANSO* Cong(PHANSO *ps);
};

