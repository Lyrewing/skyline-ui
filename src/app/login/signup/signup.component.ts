import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {MatSnackBar} from '@angular/material';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AccountService]
})


export class SignupComponent implements OnInit {

  constructor(private accountService: AccountService, public snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
  }

  register(u: any) {
    if (u.email.length == 0) {
      this.showMessage('邮箱不能为空！', '注册');
      return;
    }
    if (u.passwordInfo.password.length == 0 || u.passwordInfo.password != u.passwordInfo.repassword) {
      console.log(u.passwordInfo.password, u.passwordInfo.repassword);
      this.showMessage('两次输入的密码不一致！', '注册');
      return;
    }
    let user: User = new User();
    user.Phone = u.phone;
    user.Password = u.passwordInfo.password;
    user.Email = u.email;
    console.log(user);
    this.accountService.register(user).subscribe(() => {
      this.showMessage('成功!', '注册');
    }, () => {
      this.showMessage('失败！', '注册');
    });
  }

  showMessage(message: string, action: string) {
    let bar = this.snackBar.open(message, action, {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    bar.afterDismissed().subscribe(null, null, () => {
      if (message === '成功!' && action === '注册') {
        this.router.navigateByUrl('login');
      }

    });
  }


}


