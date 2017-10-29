/*Bai 6 Cach2*/
#include <iostream>
#include <math.h>

using namespace std;

int main() {
	int x, y, z, a; //Cac bien lan luot la cac so nguoi dung nhap vao

				 //Thogn bao cho nguoi dung nhap 3 so nguyen
	cout << "Nhap 3 so nguyen bat ki, cach nhau boi dau cach : ";
	cin >> x >> y >> z;
	cout << endl;

	// Thong bao cho nguoi dung biet ho da nhap nhung gi
	cout << "3 so ban da nhap la : " << x << ", " << y << ", " << z << endl;

	if (x > y) {
		a = x;
		x = y;
		y = a;
	}
	if (x > z) {
		a = x;
		x = z;
		z = a;
	
	}
	if (y > z) {
		a = y;
		y = z;
		z = a;
	}
	// Thong bao ket qua
	cout << "Sap xep theo thu tu tang dan : " << x << ", " << y << ", " << z << endl;
	system("pause");
	return 0;
}
