import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const HOST =environment.HOST
@Injectable()
export class VoteService{
    constructor(private http:HttpClient){
    }
    vote(code:string):Observable<any>{
        let url=HOST+'v1/vote/vote';
        return this.http.post(url,{code:code})
    }
    getBooks():Observable<any>{
        let url=HOST+'v1/vote/list';
        return this.http.get(url)
    }
}