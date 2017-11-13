/*Bài 2: Một hộp sữa có thể chứa 3,78 lít sữa. Mỗi buổi sáng, một trang trại bò sữa đưa các hộp sữa đến một cửa hàng tạp hoá tại địa phương. 
Chi phí sản xuất một lít sữa là 0,38 đô la, và lợi nhuận của mỗi hộp sữa là 0,27 đô la. Viết chương trình thực hiện những việc sau:

a. Nhắc người dùng nhập tổng số lượng sữa được sản xuất vào buổi sáng.
b. Xuất ra số lượng hộp sữa cần thiết để giữ sữa. (Đưa ra câu trả lời cho số nguyên gần nhất.)
c. Xuất ra chi phí sản xuất sữa.
d. Xuất ra lợi nhuận ước tính của số lượng sữa đã sản xuất.
*/


#include <iostream>

using namespace std;

const double LITER_ONE_BOX = 3.78;
const double FEE_LITER = 0.38;
const double INCOME_PER_BOX = 0.27;

int main()
{
	double product, AllFee, AllIncome, income;
	int box;

	//nhap so luong sua
	cout << "nhap so luong sua da duoc san xuat trong ngay: ";
	cin >> product;
	cout << endl;

	//so hop sua can thiet de giu sua
	box = product / LITER_ONE_BOX;
	cout << " so hop sua can de giu sua la: " << box << endl;

	//chi phi san xuat sua
	AllFee = FEE_LITER * product;
	cout << "chi phi san xuat sua la: $" << AllFee << endl;

	//loi nhuan so sua da san xuat
	AllIncome = box * INCOME_PER_BOX;
	cout << " loi nhuan sua da san xuat la: $" << AllIncome << endl;

	system("pause");
	return 0;


}