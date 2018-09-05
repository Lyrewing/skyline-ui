import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routers: Routes = [
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent }
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class LoginRoutingModule { }