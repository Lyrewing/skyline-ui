import {Component, OnInit,InjectionToken} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AccountService]
})
export class SigninComponent implements OnInit {

  constructor(private accountService: AccountService, public snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
  }

  login(u: any) {
    if (u.account.length == 0 || u.password.length == 0) {
      this.showMessage('用户名或密码不能为空！', '登陆');
      console.log(u);
      return;
    }
    this.accountService.login(u.account, u.password).subscribe(response => {
          sessionStorage.setItem("token", response.data);
          this.showMessage("成功!",'登陆');
          console.log(response)
      },
      (err) => {
          console.log(err)
      });
  }

  showMessage(message: string, action: string) {
    let bar = this.snackBar.open(message, action, {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    bar.afterDismissed().subscribe(null, null, () => {
      if (message === '成功!' && action === '登陆') {
        this.router.navigateByUrl('home');
      }
    });
  }
}
