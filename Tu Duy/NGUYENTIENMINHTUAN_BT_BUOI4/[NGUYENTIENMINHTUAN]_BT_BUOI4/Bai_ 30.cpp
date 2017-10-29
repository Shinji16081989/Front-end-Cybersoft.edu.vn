/*bai_30*/
#include <iostream>
#include <math.h>
#include <string>
#include <stdio.h>
using namespace std;

int main() {

	float vonTichLuy, p = 0 , n = 0 , r = 0;
	char comma ;

	cout << "Nhap lai suat, tien von, thoi han gui tien lan luot cach nhau bang dau phay : ";
	cin >> r >> comma >> p >> comma >> n;
	cout << endl;

	if (r <= 0 || p <= 0 || n <= 0)
	{
		cout << "ban da nhap loi" << endl;
	}
	else {
		cout << "Lai suat : " << r* 100 << "%" << endl;
		cout << "Von ban dau : " << p << endl;
		cout << "Thoi han : " << n << " nam" << endl;
	}

	for (int i = 1; i <= n; i++)
	{
		vonTichLuy = p*pow((1 + r), i);
		cout << vonTichLuy << endl;
	}
	
	system("pause");
}