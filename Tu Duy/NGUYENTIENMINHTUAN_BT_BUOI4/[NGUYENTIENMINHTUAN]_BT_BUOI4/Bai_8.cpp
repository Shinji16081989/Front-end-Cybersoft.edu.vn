/*Bai 8*/
#include <iostream>
#include <math.h>

using namespace std;

int main() 
{
	double a, b, c; // a,b,c tuong uong voi ax^2 + bx +c =0
	double delta;
	double x, x1, x2; // Nghiem phuong trinh
	//Thong bao nhap
	cout << "Nhap 3 so a,b,c lan luot, cach nhau boi dau cach : ";
	cin >> a >> b >> c;
	cout << endl;
	
	//Thong bao xuat
	cout << "Ban da nhap 3 so abc theo thu tu : " << a << ", " << b << ", " << c << endl;

	//Thong bao xuat
	if (a == 0 && b == 0) {
		cout << "Phuong trinh khong dung. Vui long nhap lai" << endl;
	}
	else if (a == 0) {
		cout << " Phuong trinh ban da nhap : " << b << "x + " << c << "= 0" << endl;
		//Nghiem phuong trinh
		x = - c / b;
		cout << "Nghiem cua phuong trinh : " << x << endl;
	}
	else if (a != 0 && b != 0) {
		cout << "Phuong trinh theo cac thong so ban da nhap : " << a << "x^2 + " << b << "x + " << c << "= 0" << endl;
		//Tinh delta
		delta = pow(b, 2) - 4 * a *c;
		if (delta == 0) {
			// Nghiem phuong trinh
			x = -b / (2 * a);
			cout << "Nghiem cua phuong trinh : " << x << endl;
		}
		else if (delta > 0) {
			//Nghiem phuong trinh
			x1 = (-b + sqrt(delta)) / (2 * a);
			x2 = (-b - sqrt(delta)) / (2 * a);
			cout << "Nghiem cua phuong trinh : x1 = " << x1 << ", x2 = " << x2 << endl;
		}
		else if (delta < 0) {
			//Nghiem phuong trinh
			cout << "Phuong trinh vo nghiem" << endl;
		}
	}
	
	system("pause");
	return 0;
}