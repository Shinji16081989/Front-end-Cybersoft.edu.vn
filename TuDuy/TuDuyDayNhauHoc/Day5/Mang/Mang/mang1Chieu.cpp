#include <iostream>

using namespace std;

const int ARRAY_SIZE = 25;

/*int main() {
	int arr[ARRAY_SIZE];
	cout << "mang arr co gia tri la: " << endl;
	for (int i = 0; i < ARRAY_SIZE; i++)
	{
		arr[i] = i;
		cout << arr[i] << " ";
	}

	int arr_clone[ARRAY_SIZE];
	cout << "\nGan gia tri cho arr_clone:" << endl;
	for (int i = 0; i < ARRAY_SIZE; i++)
	{
		arr_clone[i] = arr[i];
	}

	cout << "Gia tri cua mang arr_clone la: " << endl;
	for (int i = 0; i < ARRAY_SIZE; i++)
	{
		cout << arr_clone[i] << " ";
	}
	system("pause");
	return 0;
}*/

int main() {
	char arr_name[] = { 'N', 'g', 'u', 'y', 'e', 'n', ' ', 'H', 'a', 'i', ' ', 'D', 'a', 'n', 'g', 0 };
	// tim chu n va dem chu n 
	int demchu = 0;

	for (int i = 0; i < ARRAY_SIZE; i++)
	{	
		if (arr_name[i] == 'n'){
			demchu++;
		}
	}
	cout << "co " << demchu << " chu n" << endl;

	system("pause");
	return 0;
}