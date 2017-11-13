#include <iostream>
#include <math.h>

using namespace std;

//Khai bao ham

void Nhap(int &, int &, int &);
int XuLy(int, int, int);
int Xuat(int &, int &, int &, int &);

//Ham Nhap
void Nhap(int&ngay, int &thang, int &nam)
{
	cout << "Nhap ngay, thang, nam lan luot; cach nhau bang dau cach : ";
	cin >> ngay >> thang >> nam;
	cout << endl;
}
//Ham XuLy
int XuLy(int ngay, int thang, int nam)
{
	int bienTam;

	if (ngay >= 2 && ngay <= 28 && thang == 2)
	{
		ngay = ngay - 1;
		bienTam = 1;
	}
	//Kiem tra nam
	if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0)
	{
		if (thang == 2 && ngay == 29) {
		ngay = 28;
		bienTam = 1;
		}
		else if (thang == 3 && ngay == 1) {
			ngay = 29;
			thang = 2;
			bienTam = 1;
		}
		
	}
	if (thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay == 1) {
		ngay = 31;
		thang = thang - 1;
		bienTam = 1;

	}
	else if (thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay <= 30 && ngay >= 2)
	{
		ngay = ngay - 1;
		bienTam = 1;
	}
	
	else if (ngay == 1 && thang == 1)
	{
		ngay = 31;
		thang = 12;
		nam = nam - 1;
		bienTam = 1;
	}
	else if (ngay == 1 && thang == 3) {
		ngay = 28;
		thang = 2;
		bienTam = 1;
	}
	else if (ngay == 1 && thang == 5 || thang == 7 || thang == 10)
	{
		ngay = 30;
		thang = thang - 1;
		bienTam = 1;
	}
	else if (ngay == 1 && thang == 8) {
		ngay = 31;
		thang = 7;
		bienTam = 1;
	}
	else if (ngay >= 2 && ngay <= 31 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)
	{
		ngay = ngay - 1;
		bienTam = 1;
	}
	else if (ngay == 1 && thang == 2)
	{
		ngay = 31;
		thang = 1;
		bienTam = 1;
	}
	return(Xuat(bienTam, ngay, thang, nam));

}

//Ham Xuat
int Xuat(int &bienTam, int &ngay, int &thang, int&nam)
{
	if (bienTam == 1) {
		cout << "Ngay homqua : " << ngay << "/" << thang << "/" << nam << endl;
	}
	return 0;
}
int main()
{
	int ngay, thang, nam;
	int bienTam;

	Nhap(ngay, thang, nam);
	XuLy(ngay, thang, nam);
	Xuat(bienTam, ngay, thang, nam);

	system("pause");
	return 0;
}
