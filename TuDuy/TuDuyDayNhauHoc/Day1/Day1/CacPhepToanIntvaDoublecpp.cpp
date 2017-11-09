#include <iostream>

using namespace std;

int main() {
	int soNguyen; double soThuc;

	cout << "Nhap vao mot so nguyen va mot so thuc" << endl;
	cin >> soNguyen >> soThuc;
	cout << endl;

	cout << "so nguyen = " << soNguyen << endl;
	cout << "so thuc x 3 = " << soThuc * 3 << endl;
	cout << "so nguyen ^ 2 = " << soNguyen * soNguyen << endl;
	cout << "so nguyen % 2 = " << soNguyen % 2 << endl;
	cout << "can bac 2 cua so thuc == " << sqrt(soThuc) << endl;
	cout << " Cac phep tang giam truc tiep" << endl;
	cout << "so thuc - 3 = " << (soThuc -= 3)<< endl;
	cout << "so thuc * 3 = " << (soThuc *= 3) << endl;
	cout << "so thuc la = " << soThuc << endl;

	system("pause");
	return 0;
}