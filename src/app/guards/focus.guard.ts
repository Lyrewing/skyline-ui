import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GuideComponent } from '../projects/guide/guide.component';

@Injectable()
export class FocusGuard implements CanDeactivate<GuideComponent> {
  canDeactivate(component: GuideComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> {
    if (component.isReadAll) {
      console.log(component.isReadAll)
      return true;
    } else {
      return window.confirm("你确定已经读取完了吗");
    }
  }
}
