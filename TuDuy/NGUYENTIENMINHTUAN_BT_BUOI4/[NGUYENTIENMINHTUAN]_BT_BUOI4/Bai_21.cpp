/*Bai_20*/

#include <iostream>
#include <math.h>
#include <string>
using namespace std;

//Khai bao ham
void Nhap(double&, double&, double&, double&, string&, string&);
int XuLy(double, double, double, double, string, string);
int Xuat(int&, double&);

//Nhap
void Nhap(double& diemChuan, double& mon_1, double& mon_2, double& mon_3, string& khuVuc, string& doiTuong)
{
	cout << "Nhap diem chuan cua hoi dong : ";
	cin >> diemChuan;

	cout << "Nhap diem thi 3 mon : ";
	cin >> mon_1 >> mon_2 >> mon_3;

	cout << "Nhap khu vuc (A, B, C, X) : ";
	cin >> khuVuc;

	cout << "Nhap doi tuong (1, 2, 3, 0) : ";
	cin >> doiTuong;
}

//XuLy
int XuLy(double diemChuan, double mon_1, double mon_2, double mon_3, string khuVuc, string doiTuong)
{
	int bienTam;
	double diemThi;

	// Xac dinh diem thi cua hoc sinh
	diemThi = mon_1 + mon_2 + mon_3;

	if (khuVuc == "A")
	{
		diemThi = diemThi + 2;
	}
	else if (khuVuc == "B")
	{
		diemThi = diemThi + 1;
	}
	else if (khuVuc == "C")
	{
		diemThi = diemThi + 0.5;
	}
	else if (khuVuc == "X")
	{
		diemThi = diemThi;
	}

	if (doiTuong == "1")
	{
		diemThi = diemThi + 2.5;
	}
	else if (doiTuong == "2")
	{
		diemThi = diemThi + 1.5;
	}
	else if (doiTuong == "3")
	{
		diemThi = diemThi + 1;
	}
	else if (doiTuong == "0")
	{
		diemThi = diemThi;
	}

	//Xac dinh dau hay rot

	if (diemThi >= diemChuan)
	{
		bienTam = 1;
	}
	else if (diemThi < diemChuan)
	{
		bienTam = 2;
	}
	return (Xuat(bienTam, diemThi));
}

//Xuat
int Xuat (int&bienTam, double&diemThi)
{
	if (bienTam == 1)
	{
		cout << "Dau [" << diemThi << "]" << endl;
	}
	else if (bienTam == 2)
	{
		cout << "Rot [" << diemThi << "]" << endl;
	}
	return 0;

}

int main()
{
	double diemChuan, mon_1, mon_2, mon_3, diemThi;
	string khuVuc, doiTuong;
	int bienTam;

	Nhap(diemChuan, mon_1, mon_2, mon_3, khuVuc, doiTuong);
	XuLy(diemChuan, mon_1, mon_2, mon_3, khuVuc, doiTuong);
	Xuat(bienTam, diemThi);

	system("pause");
	return 0;
}