import { Injectable, EventEmitter } from '@angular/core';
import { baseUrl } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { User } from '../../models/user'
import { Observable } from 'rxjs/Observable'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {
  url = baseUrl + 'users'
  constructor(private http: HttpClient) { }
  didLogIn = new EventEmitter()
  login(username: string, password: string): Observable<any> {
    let auth = {username: username, password: password}
    return this.http.post<any>(this.url+"/login", auth).pipe(
      tap(_ => this.didLogIn.emit(username))
    )
  }
  create(username: string, password: string): Observable<any> {
    let auth = {username: username, password: password}
    return this.http.post<any>(this.url+"/signUp", auth).pipe(
      tap(_ => this.didLogIn.emit(username))
    )
  }
}
