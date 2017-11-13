/*Bai 1 Tinh V hinh cau*/
#include <iostream>
#include <cmath>

using namespace std;
//Khai bao bien hang so
const double PI = 3.141593;
//Khai bao ham
void Nhap(double&);
int Giai(double);
int Xuat(double &, double&);

//Cai dat ham nhap
void Nhap(double &S)
{
	cout << "Hay nhap S cua mot mat cau : ";
	cin >> S;
	cout << endl;
	cout << "Dien tich cua mot mat cau : " << S << endl;
}

//Cai dat ham Giai
int Giai(double S)
{
	double R, V;

	R = sqrt(S / (4 * PI));
	V = 4.0 / 3 * PI * pow(R, 3.0);

	return Xuat(R, V);

}
int Xuat(double &R,double &V)
{
	cout << R;
	cout << "The tich cua hinh cau : " << V << endl;
	return 0;
}
int main()
{
	double S;

	Nhap(S);
	Giai(S);

	system("pause");
	return 0;

}
