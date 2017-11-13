/*Bai_13*/
#include <iostream>
#include <math.h>

using namespace std;
//Khai bao ham
void Nhap(int &, int&, int&);
// Ham xu ly
int XuLy(int, int, int);
// Ham Xuat
int Xuat(int&, int&);
//Cai dat ham

void Nhap(int &ngay,int &thang,int &nam)
{
	cout << "Nhap ngay thang nam lan luot, cach nhau bang dau cach  : ";
	cin >> ngay >> thang >> nam;
	cout << endl;
}
//Ham Xuly
int XuLy(int ngay, int thang, int nam)
{

	int bienTam;
	int bienGiu;
	int a,y,m;
	int dayOfWeek;

	a = (14 - thang) / 12;
	y = nam - a;
	m = thang + 12 * a - 2;

	//Kiem tra nhap
	if (thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay <= 30)
	{
		bienTam = 1;
	}
	else if (ngay <= 31 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)
	{
		bienTam = 1;
	} 
	else if (ngay <=29 && thang == 2 )
	{
		bienTam = 1;
	}
	else {
		bienTam = 2;
		return 0;
	}

	//Kiem tra nam
	if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0)
	{
		bienTam = 3;
	}
	//Xuat thu
	bienGiu = (ngay + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12);
	dayOfWeek =  bienGiu % 7;
	return (Xuat(bienTam, dayOfWeek));
}

//Ham Xuat
int Xuat(int & bienTam, int & dayOfWeek)
{
	if (bienTam == 1)
	{
		cout << "Ngay thang hop le" << endl;
	}
	else if(bienTam == 2)
	{
		cout << "Ngay thang hop le. Vui long nhap lai." << endl;
	}
	if (dayOfWeek == 0)
	{
		cout << "Chu Nhat" << endl;
	}
	else if (dayOfWeek == 1)
	{
		cout << "Thu Hai" << endl;
	}
	else if (dayOfWeek == 2)
	{
		cout << "Thu ba" << endl;
	}
	else if (dayOfWeek == 3)
	{
		cout << "Thu tu" << endl;
	}
	else if (dayOfWeek == 4)
	{
		cout << "Thu nam" << endl;
	}
	else if (dayOfWeek == 5)
	{
		cout << "Thu sau" << endl;
	}
	else if (dayOfWeek == 6)
	{
		cout << "Thu bay" << endl;
	}
	return 0;
}
int main()
{
	int ngay, thang, nam;
	int dayOfWeek;
	int bienTam;

	Nhap(ngay, thang, nam);
	XuLy(ngay, thang, nam);
	Xuat(bienTam, dayOfWeek);

	system("pause");
	return 0;
}