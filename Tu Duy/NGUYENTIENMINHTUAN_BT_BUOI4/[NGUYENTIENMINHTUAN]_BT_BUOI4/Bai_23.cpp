/*Bai_23*/
#include <iostream>
#include <math.h>

using namespace std;

//Khai bao ham
void Nhap(int&);
int XuLy(int);

//Nhap
void Nhap(int&n)
{
	cout << "Nhap so nguyen duong n : ";
	cin >> n;
	cout << endl;
}

//XuLy
int XuLy(int n)
{

	//Kiem Tra so nguyen duong
	if (n <= 0) {
		cout << "So ban nhap phai la so nguyen duong. Vui long nhap lai." << endl;
		return 0;
	}
	else if (n > 0)
	{
		for (int a = 1; a <= n; a++)
		{
			int sum = 0;
			for (int i = 1; i <= a - 1; i++) 
			{
				if (a % i == 0)
				{
					sum = sum + i;
				}
			}
			if (sum == a)
			{
				cout << a << endl;
			}
		}
	}
	return 0;
}

int main()
{
	int n;

	Nhap(n);
	XuLy(n);

	system("pause");
	return 0;

}