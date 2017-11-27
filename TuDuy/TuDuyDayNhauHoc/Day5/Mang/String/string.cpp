#include <iostream>

using namespace std;

/*int main() {
	string name;
	cout << "enter your name: ";
	cin >> name;

	cout << "Your name is: " << name << endl;

	system("pause");
	return 0;
}*/
/*
// ham tinh tong
**************************************************************
int tinh_tong(int a, int b) {
	int c;
	c = a + b;
	return c;
}

//ham main
int main() {
	int tong = tinh_tong(1, 2);
	cout << tong << endl;

	system("pause");
	return 0;
}
***************************************************************
*/

/*void introduce(string name) {
	cout << "Hello " << name << endl;
	cout << "I am a program" << endl;
}

int main() {
	introduce("Dang");

	system("pause");
	return 0;
}
***************************************
*/

// Tim So Lon Nhat
int so_lon_nhat(int a, int b, int c, int d) {
// Hoàn thành hàm số lớn nhất
	int max;
	if (a > b){
		if (a > c && a > d) {
			max = a;
		}
	}
	else if (a < b) {
		if (b > c && b > d) {
			max = b;
		}
	}
	else if (c > d) {
		if (c > a && c > b) {
			max = c;
		}
	}
	else if (c < d) {
		if (d > a && d > b) {
			max = d;
		}
	}

	return max;
}

// Đừng sửa code hàm _main
// Hàm _main là ví dụ cách gọi hàm so_lon_nhat
int main() {
	int a, b, c, d;
	cin >> a >> b >> c >> d;
	int ans = so_lon_nhat(a, b, c, d);
	cout << ans;

	system("pause");
	return 0;
}