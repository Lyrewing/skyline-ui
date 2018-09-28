import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Predicate, Injectable } from "@angular/core";
import { Book } from "../model/Book";
import { Observable } from "rxjs";
@Injectable()
export class GuidResolve implements Resolve<Book>{
    constructor(private router:Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book | Observable<Book> | Promise<Book> {
       let id= route.params["Id"];
       if(id==1){
        return new Book();
       }else{
         this.router.navigate(["/home"]);
         return undefined;
       }
    }

}