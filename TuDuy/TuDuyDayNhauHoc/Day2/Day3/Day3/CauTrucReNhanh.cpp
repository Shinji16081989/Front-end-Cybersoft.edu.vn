#include <iostream>
#include <math.h>

using namespace std;

/*int main() {
	cout << " 1: BLACK\n2: BLUE\n3: GREEN\n4: YELLOW\n5: WHITE" << endl;
	cout << "Enter your favorite color: ";
	int color;
	cin >> color;

	switch (color)
	{
	case 1:
		cout << "You like BLACK color" << endl;
		break;
	case 2:
		cout << "You like BLUE color" << endl;
		break;
	case 3:
		cout << "You like GREEN color" << endl;
		break;
	case 4:
		cout << "You like YELLOW color" << endl;
		break;
	case 5:
		cout << "You like WHITE color" << endl;
		break;
	}

	system("pause");
	return 0;

}*/

/*int main() {
    int choice = -2 ;
    switch(choice)
    {
        case -1:
            cout << "Case -1";
            break;
        case -2:
            cout << "Case -2";
        break;
    }
	system("pause");
	return 0;
}*/

/*int main() {
	int score = 0;
	int count = 0;
	while (score < 4)
	{
		count++;
		cout << "Enter your grade: " << endl;
		cin >> score; 
	}
	cout << "CongratulatioN! You passed the exam";

	system("pause");
	return 0;
}*/

/*int main() {
	int outer = 1;
	while (outer <= 5) {
		int inner = 1;
		while (inner <= outer) {
			cout << inner << " ";
			inner++;
		}
		cout << endl;
		outer++;
	}
	system("pause");

	return 0;
}*/

/*int main() {
	int outer = 1;
	while (outer <= 5) {
		int inner = 1;
		while (inner <= 5) {
			cout << inner << " ";
			inner++;
		}cout << endl;
		outer++;
	}
	system("pause");
	return 0;
}*/

/*int main() {
	int outer = 1;
	while (outer <= 8) {
		int inner = 2;
		while (inner <= outer) {
			cout << inner << " ";
			inner++;
		}
		cout << endl;
		outer++;
	}

	system("pause");
	return 0;
}*/


int main() {
	int i = 0;
	while (i < 10)
	{
		i++;
		printf("day\n");
		while (i < 8) {
			i++;
			printf("nhauhoc\n");
		}
	}
	system("pause");
	return 0;
}
