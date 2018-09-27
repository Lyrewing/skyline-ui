import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginModule } from './login/login.module';
import { ProjectsModule } from './projects/projects.module';
import { PermissionGuard } from './guards/permission.guard';

const routers: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routers)],
  exports: [RouterModule, LoginModule,ProjectsModule],
})
export class RoutingModule { }
