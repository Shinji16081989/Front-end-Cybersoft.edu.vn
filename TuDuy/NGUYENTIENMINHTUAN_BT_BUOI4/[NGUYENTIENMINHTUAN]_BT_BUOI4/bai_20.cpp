/*Bai 20*/
#include <iostream>
#include <math.h>

using namespace std;

const int Tien_100 = 500 * 100;
const int Tien_250 = 800 * 150;
const int Tien_350 = 1000 * 100;
const int Tien_LON_350 = 1500;

//Khai bao ham
void Nhap(int&);
int XuLy(int);
int Xuat(int &, int&);
//Nhap
void Nhap(int& kW_Dien)
{
	cout << "Nhao so kW dien : ";
	cin >> kW_Dien;
	cout << endl;

	cout << "So kW dien ban da nhap : " << kW_Dien << " kW" << endl;
}
int XuLy(int kWDien)
{
	int bienTam;
	int soTien;
	if (kWDien <= 100 && kWDien >= 0)
	{
		soTien = kWDien * 500;
		bienTam = 1;
	}
	else if (kWDien > 100 && kWDien <= 250)
	{
		soTien = Tien_100 + (kWDien - 100) * Tien_250;
		bienTam = 1;
	}
	else if (kWDien > 250 && kWDien <= 350)
	{
		soTien = Tien_100 + Tien_250 + (kWDien - 250) * Tien_350;
		bienTam = 1;
	}
	else if (kWDien > 350)
	{
		soTien = Tien_100 +  Tien_250 + Tien_350 + (kWDien - 350) * Tien_LON_350;
		bienTam = 1;
	}
	return (Xuat(bienTam, soTien));
}

//Xuat
int Xuat(int &bienTam, int& soTien)
{
	if (bienTam == 1)
	{
		cout << "So Tien Dien ban phai dong : " << soTien << " d " << endl;
	}
	return 0;
}

int main()
{
	int kWDien, bienTam, soTien;

	Nhap(kWDien);
	XuLy(kWDien);
	Xuat(bienTam, soTien);

	system("pause");
	return 0;
}