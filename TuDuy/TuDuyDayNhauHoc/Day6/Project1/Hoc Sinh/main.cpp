#include "LOPHOC.h"

void main() {
	LOPHOC *lop = new LOPHOC();

	lop->Nhap();
	lop->Xuat();

	delete lop;

	system("pause");
}