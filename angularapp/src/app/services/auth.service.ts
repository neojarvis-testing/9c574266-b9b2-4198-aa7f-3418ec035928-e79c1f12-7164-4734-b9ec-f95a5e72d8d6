import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://<url>:8080';
  private roleSubject = new BehaviorSubject<string|null>(null);
  private userIdSubject = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) { }

  register(user:User): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/register`,user);
  }

  login(login: Login): Observable<any>{
    return new Observable(observer => {
      this.http.post<any>(`{$this.apiUrl}/api/login`,login).subscribe({
        next:response =>{
          localStorage.setItem(`token`,response.token);
          this.roleSubject.next(response.userRole);
          this.userIdSubject.next(response.userId);
          observer.next(response);
          observer.complete();
        },
        error: err => observer.error(err)
      });
    });
  }

  getRole():Observable<string | null> {
    return this.roleSubject.asObservable();
  }

  getToken(): string|null {
    return localStorage.getItem(`token`);
  }

  logout(): void{
    localStorage.removeItem(`token`);
    this.roleSubject.next(null);
    this.userIdSubject.next(null);
  }
}
