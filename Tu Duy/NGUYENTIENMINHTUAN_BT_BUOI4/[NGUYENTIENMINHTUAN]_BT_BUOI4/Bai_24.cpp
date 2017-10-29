/*Bai_24*/
#include <iostream>
#include <math.h>
#include <string>
using namespace std;

int main()
{
	unsigned long n;
	string a;
	
	cout << "Nhap N: ";
	cin >> n;
	cout << endl;

	a = to_string(n);

	cout << "a. So tu nhien co bao nhieu chu so : " << a.length() << endl;
	cout << "b. Chu so cuoi cung : " << n % 10 << endl;
	cout << "c. Chu so dau tien : " << a.substr(0,1) << endl;

	int sum = 0;
	for (int i = 0; i < a.length(); i++)
	{
		sum += std::stoi(a.substr(i, 1));
	}
	cout << "d. Tong cac chu so : " << sum << endl;
	
	int soDaoNguoc = 0;
	do
	{
		soDaoNguoc = soDaoNguoc * 10;
		int digit = n % 10;
		soDaoNguoc += digit;
		n /= 10;
	} while (n);
	cout << "e. So dao nguoc la " << soDaoNguoc << "." << endl;
	system("pause");
	return 0;
}