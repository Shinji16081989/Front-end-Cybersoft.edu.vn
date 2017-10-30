/*bai_25*/
#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	int a, b;

	cout << "Nhap a,b: ";
	cin >> a >> b;
	cout << endl;

	int gcd = a;
	while (a % gcd != 0 || b % gcd != 0)
	{
		gcd = gcd -1;
	}
	cout << "a. Uoc so chung lon nhat : " << gcd << endl;

	int lcm = a;
	while (lcm % a != 0 || lcm % b != 0)
	{
		lcm = lcm + 1;
	}
	cout << "b. Boi so chung nho nhat : " << lcm << endl;

	system("pause");
	return 0;
}