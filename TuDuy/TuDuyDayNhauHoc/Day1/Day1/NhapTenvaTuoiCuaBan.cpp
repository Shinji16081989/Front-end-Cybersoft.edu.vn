/*Chuong trinh Nhap Ten, Tuoi va xuat ra*/
#include <iostream>
#include <string>

using namespace std;

int main() {
	int tuoi;
	string ten;

	cout << " ten ban la gi: ";
	cin >> ten;
	cout << endl;

	cout << "Nhap tuoi cua ban: ";
	cin >> tuoi;
	cout << endl;

	cout << " xin chao ten ban la: " << ten << endl;
	cout << " Tuoi cua ban la: " << tuoi << endl;

	system("pause");
	return 0;

}