/*Bai tap 3*/
#include <iostream>
#include <math.h>

using namespace std;
//Khai bao ham
void Nhap_Xuat_Thong_Bao(float &, float &, float &, float &, float &);
int XuLy(float, float, float, float, float);
int Xuat(int&);

//Ham Nhap
void Nhap_Xuat_Thong_Bao(float &xC, float &yC, float &R, float &xM, float &yM)
{
	//Thong bao cho nguoi dung nhap toa do tam va ban kinh
	cout << "Nhap toa do tam cua duong tron, cach nhau bang dau cach : ";
	cin >> xC >> yC;
	cout << "Nhap ban kinh cua duong tron : ";
	cin >> R;
	cout << endl;

	//Thong bao toa do tam duong tron nguoi dung da nhap
	cout << "Toa do tam duong tron ban da nhap : (" << xC << ", " << yC << ")" << endl;
	cout << "Ban kinh cua duong tron : " << R << endl;

	//Thong bao cho nguoi dung nhap toa do cua mot diem bat ki
	cout << "Nhap toa do tam cua mot diem bat ki, cach nhau bang dau cach : ";
	cin >> xM >> yM;
	cout << endl;
	//Thong bao toa do tam duong tron nguoi dung da nhap
	cout << "Toa do diem bat ki ban da nhap : (" << xM << ", " << yM << ")" << endl;
}

//Ham XuLy
int XuLy(float xC, float yC, float R, float xM, float yM)
{
	float d, R_2; // Binh phuong khoang cach giua 2 diem, binh phuong ban kinh.
	int bienTam;

	d = pow(xM - xC, 2) + pow(yM - yC, 2);
	R_2 = pow(R, 2);

	if (d > R_2)
	{
		bienTam = 1;
	}
	else if (d == R_2)
	{
		bienTam = 2;
	}
	else if (d < R_2)
	{
		bienTam = 3;
	}
	return (Xuat(bienTam));
}

//Ham Xuat
int Xuat(int &bienTam)
{
	if (bienTam == 1)
	{
		cout << "Diem M nam ngoai duong tron tam C" << endl;
	}
	else if (bienTam == 2)
	{
		cout << "Diem M nam tren duong tron tam C" << endl;
	}
	else if (bienTam == 3) 
	{
		cout << "Diem M nam trong duong tron tam C" << endl;
	}
	return 0;
}
int main() 
{
	float xC, yC, R, xM, yM;
	int bienTam;

	Nhap_Xuat_Thong_Bao(xC, yC, R, xM, yM);
	XuLy(xC, yC, R, xM, yM);
	Xuat(bienTam);


	system("pause");
	return 0;

}