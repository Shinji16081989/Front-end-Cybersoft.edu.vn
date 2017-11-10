#include <iostream>
using namespace std;

const int NUMBER_OF_BIRTH = 1982;

void main() {
	cout << " 18 + 12 * 3= " << 18 + 12 * 3 << "\a" << endl;
	cout << " 18 - 12 * 3 = " << 18 - 12 * 3 << endl;
	cout << " 18 - 12/3 = " << 18 - 12/3 << endl;

	NUMBER_OF_BIRTH = 1989;
	cout << " so thang sinh cua ban la : " << NUMBER_OF_BIRTH * 12 << endl;

	system("pause");
}