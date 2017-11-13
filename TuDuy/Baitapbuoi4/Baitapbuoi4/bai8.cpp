#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	float a, b, c, x, x1, x2, delta;
	
	cout << "Nhap ba he so tuong ung a,b,c cach nhau boi dau cach: " << endl;
	cin >> a >> b >> c;
	
	if (a == 0 && b == 0)
	{
		cout << " trong phuong trinh bac 2, a va b khong the cung luc bang 0, vui long nhap lai" << endl;
	}
	else if (a != 0 && b != 0)
	{
		delta = pow(b, 2) - 4 * a*c;
		if (delta == 0)
		{
			x = -b / 2 * a;
			cout << "phuong trinh co 1 nghiem la: " << x << endl;
		}
		else if (delta > 0)
		{
			x1 = (-b + sqrt(delta)) / (2 * a);
			x2 = (-b - sqrt(delta)) / (2 * a);
			cout << "phuong trinh co 1 nghiem la x1: " << x1 << " va x2 la: " << x2 << endl;
		}
		else if (delta < 0)
		{
			cout << " phuong trinh vo nghiem" << endl;
		}
	}
	system("pause");
	return 0;
}