/*Bai 7*/
#include <iostream>
#include <math.h>

using namespace std;
// Khai bao cac ham
void Nhap(float &, float&);
int Giai(float, float);
int Xuat(int&, float&);

//Cai dat ham nhap
void Nhap(float &a, float&b) {
	cout << "Nhap 2 so a, b lan luot, cach nhau boi dau cach : ";
	cin >> a >> b;
	cout << "Ban da nhap 2 so la : " << a << ", " << b << endl;
}
//Cai dat ham giai
int Giai(float a, float b)
{
	int tamGiu;
	float x;
	x = -b / a;
	if (a == 0 && b == 0)
	{
		tamGiu = 1;
	}
	else if (a == 0 && b != 0)
	{
		tamGiu = 2;
	}
	else if (a != 0 && b == 0)
	{
		tamGiu = 3;
	}
	else if (a != 0 && b != 0) {
		tamGiu = 4;
	}
	return (Xuat(tamGiu, x));
}
//Cai dat ham xuat
int Xuat(int &tamGiu, float &x)
{
	if (tamGiu == 1) {
		cout << "Phuong trinh co vo so nghiem" << endl;
	}
	else if (tamGiu == 2) {
		cout << "Phuong trinh vo nghiem" << endl;
	}
	else if (tamGiu == 3) {
		cout << "Phuong trinh co 1 nghiem x = 0" << endl;
	}
	else if (tamGiu == 4) {
		cout << "Phuong trinh co 1 nghiem x = " << x << endl;
	}
	return 0;
}

int main()
{
	float a, b, x;
	int tamGiu;

	Nhap(a, b);
	Giai(a, b);
	Xuat(tamGiu, x);

	system("pause");
	return 0;

}