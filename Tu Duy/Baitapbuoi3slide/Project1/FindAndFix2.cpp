/* tìm và sửa lỗi 2*/

#include <iostream>

using namespace std;

const char STAR = '*';
const int PRIME = 71;
const int ONE = 1;

int main()
{
	int count, sum, newSUM;
	double x;

	count = 1;
	sum = count + PRIME;
	x = 25.67;

	newSUM = count * ONE + 2;
	sum = sum + count;
	x = x + sum;
	x = x + sum * count;
	sum += 3;
	cout << " count = " << count << ", sum = " << sum << ", PRIME = " << PRIME << endl;

	system("pause");
	return 0;
}
