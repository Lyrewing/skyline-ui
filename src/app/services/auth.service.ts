import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
const HOST = environment.HOST;
@Injectable()
export class AuthService{
    constructor(private http:HttpClient){
    }
    CheckToken(token:string):Observable<any>{
        const url= HOST+"v1/token/check"
        return this.http.post(url,{token:token})
    }
} 