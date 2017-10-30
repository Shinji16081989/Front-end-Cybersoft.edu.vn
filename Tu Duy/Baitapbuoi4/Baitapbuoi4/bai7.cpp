#include <iostream>
#include <math.h>

using namespace std;

void Nhap(float &, float &);
int Xuly(float, float);
int Xuat(int&, float&);

void Nhap(float &a, float &b)
{
	cout << "nhap so a: ";
	cin >> a;
	cout << endl;

	cout << "nhap so b: ";
	cin >> b;
	cout << endl;

	cout << " so a va b ban vua nhap la: " << a << " va " << b << endl;
}

int Xuly(float a, float b)
{
	int bienTam;
	float x;
	x = -b / a;

	if (a == 0 && b != 0)
	{
		bienTam = 1;
	}
	else if (a != 0 && b == 0)
	{
		bienTam = 2;
	}
	else if (a == 0 && b == 0)
	{
		bienTam = 3;
	}
	else if (a != 0 && b != 0)
	{
		bienTam = 4;
	}
	return Xuat(bienTam, x);
}

int Xuat(int &bienTam, float &x)
{
	if (bienTam == 1)
	{
		cout << "phuong trinh vo nghiem" << endl;
	}
	
	else if (bienTam == 2)
	{
		cout << "phuong trinh co 1 nghiem x = 0" << endl;
	}
	else if (bienTam == 3)
	{
		cout << "phuong trinh co vo so nghiem" << endl;
	}
	else if (bienTam == 4)
	{
		cout << "phuong trinh co it nhat 1 nghiem x = " << x << endl;
	}
	return 0;
}

int main()
{
	float a, b, x;
	int bienTam;

	Nhap(a, b);
	Xuly(a, b);
	Xuat(bienTam, x);

	system("pause");
	return 0;
}