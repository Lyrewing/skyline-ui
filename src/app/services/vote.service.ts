import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const HOST = 'http://localhost:5000/';
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