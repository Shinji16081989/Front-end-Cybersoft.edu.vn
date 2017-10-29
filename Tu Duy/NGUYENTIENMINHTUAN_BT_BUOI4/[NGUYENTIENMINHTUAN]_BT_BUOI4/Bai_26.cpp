/*Bai_26*/
#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	int a, b, gcd;

	cout << "Nhap a,b: ";
	cin >> a >> b;
	cout << endl;

	gcd = abs(a);
	while (abs(a) % gcd != 0 || abs(b) % gcd != 0) {
		gcd = gcd - 1;
	}
	if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
		if (abs(b) / gcd != 1) {
			cout << "Phan so thu gon: " << abs(a) / gcd << "/" << abs(b) / gcd << endl;
		}
		else {
			cout << "Phan so thu gon: " << abs(a) << endl;
		}

	}
	else {
		if (abs(b) / gcd != 1) {
			cout << "Phan so thu gon: -" << abs(a) / gcd << "/" << abs(b) / gcd << endl;
		}
		else {
			cout << "Phan so thu gon: -" << abs(a) << endl;
		}

	}

	system("pause");
	return 0;
}
