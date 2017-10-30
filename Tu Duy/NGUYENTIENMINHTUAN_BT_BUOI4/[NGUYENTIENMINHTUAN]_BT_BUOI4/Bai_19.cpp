/*Bai_19*/
#include <iostream>
#include <math.h>

using namespace std;

// Khai bao
void Nhap(int&, int&, int&, int&, int&, int&);
int XuLy(int, int, int, int, int, int);
int Xuat(int&, int&, int&, int&);

//Nhap
void Nhap(int& gio_1, int& phut_1, int& giay_1, int& gio_2, int& phut_2, int& giay_2)
{
	cout << "Nhap gio, phut, giay lan 1 : ";
	cin >> gio_1 >> phut_1 >> giay_1;
	cout << endl;
	cout << "Thoi diem 1, Ban da nhap: " << gio_1 << " gio " << phut_1 << " phut " << giay_1 << " giay" << endl;

	cout << "Nhap gio, phut, giay lan 2 : ";
	cin >> gio_2 >> phut_2 >> giay_2;
	cout << endl;
	cout << "Thoi diem 2, Ban da nhap : " << gio_2 << " gio " << phut_2 << " phut " << giay_2 << " giay" << endl;
}

//XuLy
int XuLy(int gio_1, int phut_1, int giay_1, int gio_2, int phut_2, int giay_2)
{
	int bienTam;
	int distance_hour, distance_min, distance_sec;
	if (gio_1 > gio_2 || gio_1 == gio_2 && phut_1 > phut_2 || gio_1 == gio_2 && phut_1 == phut_2 && giay_1 > giay_2)
	{
		bienTam = 1;
	}
	else
	{
		if (gio_1 <= gio_2)
		{
			distance_hour = gio_2 - gio_1;
			if (phut_1 <= phut_2)
			{
				distance_min = phut_2 - phut_1;
				if (giay_1 <= giay_2) 
				{
					distance_sec = giay_2 - giay_1;
					bienTam = 2;
				}
				else if (giay_1 > giay_2)
				{
					distance_sec = giay_2 - giay_1 + 60;
					bienTam = 2;
				}
			}
			else if (phut_1 > phut_2) 
			{
				distance_min = phut_2 - phut_1 + 60;
				if (giay_1 <= giay_2)
				{
					distance_sec = giay_2 - giay_1;
					bienTam = 2;
				}
				else if (giay_1 > giay_2)
				{
					distance_sec = giay_2 - giay_1 + 60;
					bienTam = 2;
				}
			}
		}
	}
	return (Xuat(bienTam,distance_hour,distance_min, distance_sec));
}

//Xuat
int Xuat(int & bienTam, int & distance_hour, int & distance_min, int & distance_sec)
{
	if (bienTam == 1)
	{
		cout << "Thoi gian cua ban nhap khong dung. Vui long nhap lai. Thoi diem 2 phai lon hon thoi diem 1" << endl;
		return 0;
	}
	else if (bienTam == 2)
	{
		cout << "Khoang thoi gian giua 2 thoi diem : " << distance_hour << " gio " << distance_min << " phut "
			<< distance_sec << " giay." << endl;
	}
	return 0;
}

int main()
{
	int gio_1, phut_1, giay_1;
	int gio_2, phut_2, giay_2;
	int bienTam, distance_hour, distance_min, distance_sec;

	Nhap(gio_1, phut_1, giay_1, gio_2, phut_2, giay_2);
	XuLy(gio_1, phut_1, giay_1, gio_2, phut_2, giay_2);
	Xuat(bienTam, distance_hour, distance_min, distance_sec);

	system("pause");
	return 0;
}