/*Bai_18*/
#include <iostream>
#include <math.h>

using namespace std;
//Khai bao ham
void Nhap(int &);
int XuLy(int);
int Xuat(int&, int&, int&, int&, int&);

//Ham nhap
void Nhap(int &gio)
{
	cout << "Hay nhap so gio ban muon : ";
	cin >> gio;
	cout << endl;
	cout << "So gio ban da nhap : " << gio << " gio" << endl;
}
int XuLy(int gio)
{
	int bienTam;
	int ngay, tuan;
	int soDu_gio, soDu_ngay_gio;

	if (gio <= 24)
	{
		bienTam = 1;
	}
	else if (gio > 24 && gio <= 168)
	{
		soDu_gio = gio % 24;
		ngay = (gio - soDu_gio) / 24;
		bienTam = 2;
	}
	else if (gio > 168)
	{
		soDu_ngay_gio = gio % 168;
		tuan = (gio - soDu_ngay_gio) / 168;
		soDu_gio = soDu_ngay_gio % 24;
		ngay = (soDu_ngay_gio - soDu_gio) / 24;
		bienTam = 3;
	}
	return (Xuat(bienTam, ngay, tuan, gio, soDu_gio));
}

//Ham Xuat
int Xuat(int& bienTam, int& ngay, int& tuan, int&gio, int&soDu_gio)
{
	if (bienTam == 1)
	{
		cout << gio << " gio" << endl;
	}
	else if (bienTam == 2)
	{
		cout << ngay << " ngay, " << soDu_gio << " gio" << endl;
	}
	else if (bienTam == 3)
	{
		cout << tuan << " tuan, " << ngay << " ngay, " << soDu_gio << " gio" << endl;
	}
	return 0;
}

int main()
{
	int gio, ngay, tuan, soDu_gio, bienTam;

	Nhap(gio);
	XuLy(gio);
	Xuat(bienTam, ngay, tuan, gio, soDu_gio);

	system("pause");
	return 0;
}

