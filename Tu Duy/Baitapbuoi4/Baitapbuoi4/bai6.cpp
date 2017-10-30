/*bai6 : nhap trung binh ba so nguyen hay in 3 so theo man hinh theo thu tu tang dan*/
#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	float a, b, c, bientam;

	cout << "Nhap vao 3 so bat ki cach nhau boi dau cach: ";
	cin >> a >> b >> c;
	cout << endl;

	if (a > b)
	{
		bientam = a;
		a = b;
		b = bientam;
	}
	if (a > c) 
	{
		bientam = a;
		a = c;
		c = bientam;
	}
	if (b > c)
	{
		bientam = b;
		b = c;
		c = bientam;
	}
	cout << " nhap cac so co thu tu tang dan: " << a << " "<< b << " "<< c << endl;

	system("pause");
	return 0;
}