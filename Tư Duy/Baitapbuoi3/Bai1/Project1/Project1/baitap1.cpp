/*Tinh dung luong that su o cung*/

#include <iostream>

using namespace std;

const double BYTES_PER_GB = pow(2, 30);

int main()
{
	double falseDiskSize, falseDiskSize2;
	double trueDiskSize;

	// nhap dung luong
	cout << " nhap so dung luong o cung cua ban: ";
	cin >> falseDiskSize;
	cout << endl;

	//xem lai da nhap gi
	cout << "Dung luong ban da nhap la: " << falseDiskSize << " GB" << endl;

	//chuyen doi dung luong GB sang KB
	falseDiskSize2 = falseDiskSize * (pow(10, 9));

	//chuyen doi dung luong thuc te
	trueDiskSize = falseDiskSize2 / BYTES_PER_GB;

	cout << "Dung luong thuc te o cung cua ban la: " << trueDiskSize << " GB" << endl;

	system("pause");
	return 0;


}