#include <iostream>

using namespace std;

int main() {
	int x = 5;
	int y = ++x;
	int z = x++;

	cout << x << " " << y << " " << z << endl;

	system("pause");
}