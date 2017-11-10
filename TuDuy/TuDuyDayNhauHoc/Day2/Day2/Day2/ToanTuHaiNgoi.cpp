#include <iostream>
#include <cmath>

using namespace std;

int main() {
	int ti = 2;
	int suu = 3;

	cout << ti << " + " << suu << " = " << ti + suu << endl;
	cout << ti << " - " << suu << " = " << ti - suu << endl;
	cout << ti << " * " << suu  << " = " << ti * suu << endl;
	cout << ti << " / " << suu << " = " << ti / suu << endl;
	cout << ti << " % " << suu << " = " << ti % suu << endl;
	cout << ti << " ^ " << suu << " = " << pow(ti, suu) << endl;

	system("pause");
	return 0;
}