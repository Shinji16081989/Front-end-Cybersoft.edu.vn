/*bai 4*/
#include <iostream>
#include <math.h>

using namespace std;
//Khai bao ham
void Nhap(float &, float &, float &);
int XuLy(float, float, float);
int Xuat(int&, float&);
//Ham Nhap
void Nhap(float &canh1, float &canh2, float &canh3)
{
	cout << "Nhap ba so thuc bat ki lam canh cua tam giac, cach nhau boi dau cach : ";
	cin >> canh1 >> canh2 >> canh3;
	cout << endl;
}
int XuLy(float canh1, float canh2, float canh3)
{
	int bienTamGiac;
	float p, S;
	//Nua chu vi tam giac va tinh S cua tam giac:
	p = (canh1 + canh2 + canh3) / 2;
	S = sqrt(p * (p - canh1) * (p - canh2) * (p - canh3));
	//Kiem tra va tim loai tam giac
	if (canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh2 + canh3 > canh1)
	{
		cout << "Cac canh cua mot tam giac ban da nhap theo thu tu : " << canh1 << ", " << canh2 << ", " << canh3 << endl;
		if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) 
		{
			bienTamGiac = 1;
		}
		else if (pow(canh1, 2) + pow(canh2, 2) == pow(canh3, 2) ||
			pow(canh2, 2) + pow(canh3, 2) == pow(canh1, 2) ||
			pow(canh3, 2) + pow(canh1, 2) == pow(canh2, 2)) 
		{
			bienTamGiac = 2;
		}
		else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1 &&
			pow(canh1, 2) + pow(canh2, 2) == pow(canh3, 2) ||
			pow(canh2, 2) + pow(canh3, 2) == pow(canh1, 2) ||
			pow(canh3, 2) + pow(canh1, 2) == pow(canh2, 2)) 
		{
			bienTamGiac = 3;
		}
		else if (canh1 == canh2 && canh2 == canh3 && canh3 == canh1)
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
int main(){
	float canh1, canh2, canh3,S;
	int bienTamGiac;

	Nhap(canh1, canh2, canh3);
	XuLy(canh1, canh2, canh3);
	Xuat(bienTamGiac, S);

	system("pause");
	return 0;
}