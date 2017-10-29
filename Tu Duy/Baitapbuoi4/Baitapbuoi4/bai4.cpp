/*bai 4*/
#include <iostream>
#include <math.h>

using namespace std;
//Khai bao ham
void Nhap(float &, float &, float &);
int XuLy(float, float, float);
int Xuat(int&, float&);

//Ham Nhap
void Nhap(float &a, float &b, float &c)
{
	cout << "Nhap ba so thuc bat ki lam canh cua tam giac, cach nhau boi dau cach : ";
	cin >> a >> b >> c;
	cout << endl;
}
int XuLy(float a, float b, float c)
{
	int bienTamGiac;
	float p, S;
	//Nua chu vi tam giac va tinh S cua tam giac:
	p = (a + b + c) / 2;
	S = sqrt(p * (p - a) * (p - b) * (p - c));
	//Kiem tra va tim loai tam giac
	if (a + b > c && a + c > b && b + c > a)
	{
		cout << "Cac canh cua mot tam giac ban da nhap theo thu tu : " << a << ", " << b << ", " << c << endl;
		if (a == b || b == c || c == a)
		{
			bienTamGiac = 1;
		}
		else if (pow(a, 2) + pow(b, 2) == pow(c, 2) ||
			pow(b, 2) + pow(c, 2) == pow(a, 2) ||
			pow(c, 2) + pow(a, 2) == pow(b, 2))
		{
			bienTamGiac = 2;
		}
		else if (a == b || b == c || c == a &&
			pow(a, 2) + pow(b, 2) == pow(c, 2) ||
			pow(b, 2) + pow(c, 2) == pow(a, 2) ||
			pow(c, 2) + pow(a, 2) == pow(b, 2))
		{
			bienTamGiac = 3;
		}
		else if (a == b && b == c && c == a)
		{
			bienTamGiac = 4;
		}
		else {
			bienTamGiac = 5;
		}
	}
	else {
		bienTamGiac = 6;

		return 0;
	}
	return (Xuat(bienTamGiac, S));
}
//Ham Xuat
int Xuat(int&bienTamGiac, float & S)
{
	if (bienTamGiac == 1)
	{
		cout << "Tam giac can" << endl;
		cout << "Dien tich cua tam giac = " << S << endl;
	}
	else if (bienTamGiac == 2)
	{
		cout << "Tam giac vuong" << endl;
		cout << "Dien tich cua tam giac = " << S << endl;
	}
	else if (bienTamGiac == 3)
	{
		cout << "Tam giac vuong can" << endl;
		cout << "Dien tich cua tam giac = " << S << endl;
	}
	else if (bienTamGiac == 4)
	{
		cout << "Tam giac deu" << endl;
		cout << "Dien tich cua tam giac = " << S << endl;
	}
	else if (bienTamGiac == 5)
	{
		cout << "Tam giac thuong" << endl;
		cout << "Dien tich cua tam giac = " << S << endl;
	}
	else if (bienTamGiac == 6)
	{
		cout << "Ba canh ban nhap khong thoa man dieu kien de thanh 1 tam giac" << endl;
	}
	return 0;
}
int main() {
	float a, b, c, S;
	int bienTamGiac;

	Nhap(a, b, c);
	XuLy(a, b, c);
	Xuat(bienTamGiac, S);

	system("pause");
	return 0;
}