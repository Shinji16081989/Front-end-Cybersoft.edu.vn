<<<<<<< HEAD
﻿/*tìm và sửa lỗi 1*/

#include <iostream>
#include <string>

using namespace std;

const double DECIMAL = 5.50;
const string blanks = " ";


int main()
{
	int height, weight;
	double discount;
	double billingAmount;
	double bonus, PAY_RATE;
	int hoursWorked = 45;
	double price;

	height = 6;
	weight = 156;
	price = 49.99;
	PAY_RATE = 100;

	cout << "height = " << height << blanks << "weight = " << weight << endl;
	discount = (2 * height + weight) % 10;

	billingAmount = price * (1 - discount) - DECIMAL;

	cout << "price = " << price << blanks << "billingAmount = " << billingAmount << endl;

	bonus = hoursWorked * PAY_RATE / 50;

	cout << "Bonus= " << bonus << endl;

	system("pause");
	return 0;
=======
﻿/*tìm và sửa lỗi 1*/

#include <iostream>
#include <string>

using namespace std;

const double DECIMAL = 5.50;
const string blanks = " ";


int main()
{
	int height, weight;
	double discount;
	double billingAmount;
	double bonus, PAY_RATE;
	int hoursWorked = 45;
	double price;

	height = 6;
	weight = 156;
	price = 49.99;
	PAY_RATE = 100;

	cout << "height = " << height << blanks << "weight = " << weight << endl;
	discount = (2 * height + weight) % 10;

	billingAmount = price * (1 - discount) - DECIMAL;

	cout << "price = " << price << blanks << "billingAmount = " << billingAmount << endl;

	bonus = hoursWorked * PAY_RATE / 50;

	cout << "Bonus= " << bonus << endl;

	system("pause");
	return 0;
>>>>>>> 0ef061e7fac2fe8aa74cc84154c66caf9f7d30f4
}