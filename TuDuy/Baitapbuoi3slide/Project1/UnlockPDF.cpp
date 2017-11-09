/*Giải bài tập mở khóa file pdf*/

#include <iostream>

using namespace std;

const int PRIME = 71;
const int ONE = 1;
int main()
{
	int count, sum;
	double x;
		count = 1;
	sum = count + PRIME;
	x = 25.67;
		sum = sum + count;
	x = sum++;
	x = x + sum *count;
	sum += 3;
	cout << " count = " << count << ", sum = " << sum << ", PRIME = " << PRIME << endl;

	system("pause");
}