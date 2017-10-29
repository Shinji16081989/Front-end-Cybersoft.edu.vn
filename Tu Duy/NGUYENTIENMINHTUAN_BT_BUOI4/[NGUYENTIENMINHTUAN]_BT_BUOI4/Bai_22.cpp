/*Bai_22*/
#include <iostream>
#include <math.h>

using namespace std;

//Khai bao ham
void Nhap(int&);
int XuLy(int);
int Xuat(int&, int&, int&, int&);

//Nhap
void Nhap(int&n)
{
	cout << "Nhap so nguyen duong n : ";
	cin >> n;
	cout << endl;
}
//Xu ly
int XuLy(int n)
{
	int bienTam;
	int i = 1;
	int dem = 0;
	int sum = 0;
	//Kiem Tra so nguyen duong
	if (n <= 0) {
		bienTam = 1;
	}
	else if (n > 0)
	{
		//Tim cac uoc so, dem cac uoc so, tinh tong.
		while (i <= n)
		{
			if (n % i == 0)
			{
				cout << "Cac uoc so : " << i << endl;
				dem = dem + 1;
				bienTam = 2;
				sum = sum + i;
			}
			i++;
		}
	}
	return (Xuat(bienTam, i, dem, sum));
}

//Xuat
int Xuat(int&bienTam, int& i, int& dem, int& sum)
{
	if (bienTam == 1)
	{
		cout << "So ban nhap phai la so nguyen duong. Vui long nhap lai." << endl;
		return 0;
	}
	else if (bienTam == 2)
	{
		cout << "Co " << dem << " uoc so." << endl;
		cout << "Tong cac uoc so : " << sum << endl;
	}
	return 0;
}

int main()
{
	int n, bienTam, i, dem, sum;

	Nhap(n);
	XuLy(n);
	Xuat(bienTam, i, dem, sum);

	system("pause");
	return 0;
}