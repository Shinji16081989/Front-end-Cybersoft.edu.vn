import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public status: boolean = true;
  DangNhap(user, password) {
    if (user === "cybersoft" && password === "cybersoft") {
      this.status = false;
      swal({
        position: 'center',
        type: 'success',
        title: 'Bạn đã đăng nhập thành công',
        showConfirmButton: false,
        timer: 1500
      })
    } else if(user === "dang" && password === "dang"){
      this.status = false;
      swal({
        title: '<i>Xin Chào</i> <u>Đăng</u>',
        type: 'info',
        html:
        'You can use <b>bold text</b>, ' +
        '<a href="//github.com">links</a> ' +
        'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down">Quit!</i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    }else {
      this.status = true;
      swal(
        {
          position: 'center',
          type: 'warning',
          title: 'Nhập sai thông tin',
          showConfirmButton: false,
          timer: 1500
        }
      );
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
