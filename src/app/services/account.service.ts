import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from '../model/User';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';


const HOST = environment.HOST;

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
    
  }

  register(accountInfo: User): Observable<User> {
    const url = HOST + 'v1/user/register';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this.http.post(url, {account: accountInfo.Email, password: accountInfo.Password, phone: accountInfo.Phone}, httpOptions).pipe(
      tap((account: User) => console.log('')),
      catchError(this.handleError<User>('register'))
    );
  }

  login(email: string, password: string): Observable<any> {
    const url = HOST + 'v1/token/token';
    const basic_auth = 'Basic ' + AccountService.base64encode(email, password);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': basic_auth}),
    };

    return this.http.post(url, null, httpOptions).pipe(
      map(response => response)
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private static base64encode(account: string, password: string): string {
    let str = account + ':' + password;
    return btoa(str);
  }


}
