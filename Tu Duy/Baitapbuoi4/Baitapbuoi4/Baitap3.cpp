/*baitap3*/

#include <iostream>
#include <math.h>

using namespace std;
//khai bao ham
void thong_bao(double &, double &, double &, double &, double &);
int Xuly(double, double, double, double, double);
int Xuat(int&);

void thong_bao(double &xC, double &yC, double &R, double &xM, double &yM) 
{
	//nhap toa do
	cout << "nhap toa do xC va yC cach nhau boi dau cach: ";
	cin >> xC >> yC;
	cout << endl;

	//nhap ban kinh R
	cout << "nhap ban kinh R: ";
	cin >> R;
	cout << endl;

	//nhap toa do diem M
	cout << "nhap do toa xM va yM cach nhau boi dau cach: ";
	cin >> xM >> yM;
	cout << endl;

	//thong bao da nhap nhung gi
	cout << " ban da nhap toa do xC va yC la : (" << xC << "," << yC << ")" << endl;;
	cout << " ban da nhap R la: " << R << endl;
	cout << " ban da nhap toa do xM va yM la: (" << xM << "," << yM << ")" << endl;
}

int Xuly(double xC, double yC, double R, double xM, double yM)
{
	double d, R2;
	int var2;

	d = pow(xM - xC, 2) - pow(yM - yC, 2);
	R2 = pow(R, 2);

	if (d > R2)
	{
		var2 = 1;
	}
	else if (d == R2)
	{
		var2 = 2;
	}
	else if (d < R2)
	{
		var2 = 3;
	}
	return(Xuat(var2));
}

//Ham Xuat
int Xuat(int &var2)
{
	if (var2 == 1)
	{
		cout << "Diem M nam ngoai duong tron tam C" << endl;
	}
	else if (var2 == 2)
	{
		cout << "Diem M nam tren duong tron tam C" << endl;
	}
	else if (var2 == 3)
	{
		cout << "Diem M nam trong duong tron tam C" << endl;
	}
	return 0;
}

int main()
{
	double xC, yC, R, xM, yM;
	int var2;

	thong_bao(xC, yC, R, xM, yM);
	Xuly(xC, yC, R, xM, yM);
	Xuat(var2);


	system("pause");
	return 0;

}