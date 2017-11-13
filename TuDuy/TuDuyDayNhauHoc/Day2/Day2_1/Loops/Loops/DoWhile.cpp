#include <iostream>

using namespace std;

const int ID = 123;
const int password = 123456;

int main() {
	int id;
	int pw;

	do
	{
		//nhap id
		cout << "Nhap Id cua ban: ";
		cin >> id;
		cout << endl;
		//nhap password
		cout << "Nhap Password cua ban: ";
		cin >> pw;
		cout << endl;

	} while (id != ID || pw != password);
		

	cout << "Ban da dang nhap thanh cong" << endl;
	system("pause");
	return 0;
	
}