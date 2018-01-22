import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {
  public DanhSachGhe: Array<any> = [
    { MaGhe: 1, trangthai: false },
    { MaGhe: 2, trangthai: true },
    { MaGhe: 3, trangthai: false },
    { MaGhe: 4, trangthai: true },
    { MaGhe: 5, trangthai: false },
  ]

  public DanhSachGheDaDat: Array<any> = [];
  public SoGheDaDat: number = 0;
  DatGhe(trangthai, maghe) {
    if (trangthai) {
      this.DanhSachGheDaDat.push(maghe);
      this.SoGheDaDat++;
      console.log(this.DanhSachGheDaDat);
      swal({
        position: 'midle',
        type: 'success',
        title: 'Dat ve Thanh Cong',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      for (let i = 0; i < this.DanhSachGheDaDat.length; i++) {
        if (this.DanhSachGheDaDat[i] == maghe) {
          this.DanhSachGheDaDat.splice(i, 1);
        }
      }
      this.SoGheDaDat--;
      console.log(this.DanhSachGheDaDat);
      swal({
        title: 'Ban co muon huy ve?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Huy ve di'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Ve cua ban da Huy.',
            'success'
          )
        }
      })
    }
  }
  // Them ghe
  themdsghe(maghe: string) {
    let ob = { MaGhe: maghe };

    this.DanhSachGhe.push(ob);
    console.log(this.DanhSachGhe);
  }
  // Xoa Ghe
  xoadsghe(maghe: string) {
    
    for (let i = 0; i < this.DanhSachGhe.length; i++) {
      if (this.DanhSachGhe[i].MaGhe == maghe) {
        this.DanhSachGhe.splice(i, 1);
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
