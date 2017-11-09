#include <iostream>
#include <string>

using namespace std;

int main() {
	double ten;
	double tuoi;
	double thang;

	cout << "nhap ten va tuoi cua ban: ";
	cin >> ten >> tuoi;

	// ham tinh thang
	thang = tuoi * 12;
	cout << "Xin chao ban " << ten << " " << ", ban " << thang << " thang phai khong?" << endl;

	system("pause");
	return 0;


}