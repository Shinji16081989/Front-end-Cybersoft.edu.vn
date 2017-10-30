/*Bạn tìm thấy một công việc thú vị trong năm tuần với $15.50 mỗi giờ. Giả sử tổng số thuế mà bạn phải trả cho thu nhập từ việc làm là 14%. 
Sau khi đóng thuế, bạn dành 10% thu nhập ròng để mua quần áo mới và các phụ kiện khác cho năm học kế tiếp và 1% để mua đồ dùng học tập. 
Sau khi mua quần áo và dụng cụ học sinh, bạn sử dụng 25% số tiền còn lại để mua trái phiếu tiết kiệm. Đối với mỗi đô la bạn chi tiêu để mua trái phiếu tiết kiệm, 
cha mẹ của bạn chi $0,50 để mua trái phiếu tiết kiệm bổ sung cho bạn. Viết một chương trình nhắc nhở người dùng nhập vào mức lương cho một giờ và số giờ làm việc mỗi tuần. 
Chương trình sau đó xuất ra sau:
a. Thu nhập của bạn trước và sau khi thuế từ công việc của bạn.
b. Số tiền bạn dành cho quần áo và các phụ kiện khác.
c. Số tiền bạn dùng cho đồ dùng học tập.
d. Số tiền bạn dành để mua trái phiếu tiết kiệm.
e. Số tiền bố mẹ bạn dành để mua trái phiếu tiết kiệm bổ sung cho bạn.
*/

#include <iostream>

using namespace std;

const double WAGE_PER_HOUR = 15.50;
const double PER_DOLLAR_BONDS = 0.5;

int main()
{
	double wage, worktime, wage_after_tax, wage_before_tax, buy_clother, buy_learning_tool, buy_bonds, bonus_bond_by_parents;

	//nhap so gio ban lam viec
	
	cout << "nhap so gio ban lam viec: ";
	cin >> worktime;
	cout << endl;

	// thu nhap truoc thue
	wage_before_tax = worktime * WAGE_PER_HOUR;
	cout << "thu nhap truoc thue cua ban la: " << wage_before_tax << endl;

	//thu nhap sau thue
	wage_after_tax = wage_before_tax - (wage_before_tax * 0.14);
	cout << "thu nhap sau thue cua ban la: " << wage_after_tax << endl;

	//so tien ban mua quan ao moi
	buy_clother = wage_after_tax * 0.1;
	cout << "so tien ban mua quan ao la: " << buy_clother << endl;

	//so tien ban dung mua dung cu hoc tap
	buy_learning_tool = wage_after_tax * 0.01;
	cout << "so tien ban dung mua dung cu hoc tap la: " << buy_learning_tool << endl;

	//so tien ban dung de mua trai phieu tiet kiem
	buy_bonds = wage_after_tax *0.25;
	cout << " so tien ban mua trai phieu la: " << buy_bonds << endl;

	//so tien bo me dung de mua trai phieu bo sung cho ban
	bonus_bond_by_parents = buy_bonds * 0.5;
	cout << " so tien ba me ban mua trai phieu bo sung cho ban la: " << bonus_bond_by_parents << endl;

	system("pause");
	return 0;
}