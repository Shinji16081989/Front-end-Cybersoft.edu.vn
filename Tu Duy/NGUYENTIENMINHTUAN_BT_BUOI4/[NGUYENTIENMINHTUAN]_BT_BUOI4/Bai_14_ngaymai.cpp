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

	if (thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay <= 29 && ngay >= 1)
	{
		ngay = ngay + 1;
		bienTam = 1;
	}
	else if (thang == 4 || thang == 6 || thang == 9 || thang == 11 && ngay == 30) {
		ngay = 1;
		thang = thang + 1;
		bienTam = 1;
	}
	else if (ngay == 31 && thang == 12)
	{
		ngay = 1;
		thang = 1;
		nam = nam + 1;
		bienTam = 1;
	}
	else if (ngay == 31 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) {
		ngay = 1;
		thang = thang + 1;
		bienTam = 1;
	}
	else if (ngay >= 1 && ngay <= 30 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)
	{
		ngay = ngay + 1;
		bienTam = 1;
	}

	//Kiem tra nam
	if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0)
	{
		
		if (ngay == 29 && thang == 2) {
			ngay = 1;
			thang = 3;
			bienTam = 1;
		}
		else if (ngay == 28 && thang == 2) {
			ngay = 29;
			bienTam = 1;
		}
	}
	else {
		if (ngay == 28 && thang == 2) {
			ngay = 1;
			thang = 3;
			bienTam = 1;
		}
		else if (ngay >= 1 && ngay <= 27 && thang == 2)
		{
			ngay = ngay + 1;
			bienTam = 1;
		}
	}
	return(Xuat(bienTam, ngay, thang, nam));

}

//Ham Xuat
int Xuat(int &bienTam, int &ngay, int &thang, int&nam)
{
	if (bienTam == 1) {
		cout << "Ngay tiep theo : " << ngay << "/" << thang << "/" << nam << endl;
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
