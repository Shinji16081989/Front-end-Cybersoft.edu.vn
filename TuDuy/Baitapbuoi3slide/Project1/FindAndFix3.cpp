/*Tìm và sửa lỗi 3*/

#include <iostream>
#include <string>

using namespace std;

int main()
{
	int num1, num2;
	string strl;

	cout << "Enter a string without any blanks in it: ";
	cin >> strl;
	cout << endl;

	cout << "Enter two integers: ";
	cin >> num1 >>num2;
	cout << endl;

	cout << strl << " " << "num1 * num2 = " << num1 * num2 << endl;

	system("pause");
	return 0;
}