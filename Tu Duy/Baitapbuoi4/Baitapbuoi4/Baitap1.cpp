/* Bai 1: Nhap vao Dien Tich S, tinh the tich V duong tron*/
#include <iostream>
#include <math.h>

using namespace std;

const double PI = 3.141593;

int main()
{
	double bankinhRbac2;
	double bankinhR;
	double dientichS;
	double thetichV;

	cout << "nhap vao Dien Tich S duong tron: ";
	cin >> dientichS;
	cout << endl;

	//tinh ban kinh R va chuyen doi tu can bac 2 sang bac 1
	bankinhRbac2 = dientichS / (PI * 4);
	bankinhR = sqrt(bankinhRbac2);

	cout << "Vay Dien Dich S la: " << dientichS << endl;

	//tinh Thetich cua duong tron
	thetichV = (4*PI*pow(bankinhR, 3)) / 3;

	cout << "Va The Tich la: " << thetichV << endl;

	system("pause");
	return 0;
}