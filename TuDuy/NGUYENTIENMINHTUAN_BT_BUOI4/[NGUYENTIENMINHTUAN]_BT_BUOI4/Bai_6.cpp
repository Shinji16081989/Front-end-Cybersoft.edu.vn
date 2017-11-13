/*Bai 6 Cach1*/
#include <iostream>
#include <math.h>

using namespace std;

int main() {
	int x, y, z; //Cac bien lan luot la cac so nguoi dung nhap vao

	//Thogn bao cho nguoi dung nhap 3 so nguyen
	cout << "Nhap 3 so nguyen bat ki, cach nhau boi dau cach : ";
	cin >> x >> y >> z;
	cout << endl;

	// Thong bao cho nguoi dung biet ho da nhap nhung gi
	cout << "3 so ban da nhap la : " << x << ", " << y << ", " << z << endl;

	//Sap xep lai
	if (x <= y) {
		if (y <= z) {
			cout << x << " " << y << " " << z << endl;
		}
		else if (y > z) {
			if (z <= x) {
				cout << z << " " << x << " " << y << endl;
			}
			else if (z > x) {
				cout << x << " " << z << " " << y << endl;
			}
		}
	}
	else if (x > y) {
		if (x <= z) {
			cout << y << " " << x << " " << z << endl;
		}
		else if (x > z) {
			if (z <= y) {
				cout << z << " " << y << " " << x << endl;
			}
			else if (z > y) {
				cout << y << " " << z << " " << x << endl;
			}
		}
	}
	system("pause");
	return 0;
}