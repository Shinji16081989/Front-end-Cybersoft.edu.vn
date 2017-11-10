#include <iostream>

using namespace std;

int main() {
	int N;
	cin >> N;

	if (N % 2 != 0) {
		cout << "Weird" << endl;
	}
	else if (N % 2 == 0) {
		if (2 < N < 5 || N > 20) {
			cout << "not Weird" << endl;
		}
		else if (6 < N < 20) {
			cout << "Weird" << endl;
		}
	}


	system("pause");
	return 0;
}