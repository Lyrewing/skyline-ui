import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginModule } from './login/login.module';

const routers: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'project', redirectTo: '/project', pathMatch: 'full' }
]
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routers)],
  exports: [RouterModule, LoginModule],
})
export class RoutingModule { }
