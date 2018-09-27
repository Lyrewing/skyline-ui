import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return true;
  }
}
