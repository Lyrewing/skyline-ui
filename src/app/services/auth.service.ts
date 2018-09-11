import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
const HOST = 'http://localhost:5000/';
@Injectable()
export class AuthService{
    constructor(private http:HttpClient){
    }
    CheckToken(token:string):Observable<any>{
        const url= HOST+"v1/token/check"
        return this.http.post(url,{token:token})
    }
} 