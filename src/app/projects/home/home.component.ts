import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService,]
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    //首先验证权限，没有权限直接调到登录页
    /*
    let token = sessionStorage.getItem("token")
    if (token) {
      this.authService.CheckToken(token).subscribe((response) => {
        if (!response.result) {
          this.router.navigateByUrl('login');
        }
      })
    } else {
      this.router.navigateByUrl('login');
    }
    */
  }
  test() {
    console.log("home")
  }

}
