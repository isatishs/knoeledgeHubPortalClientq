import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(login: LoginModel) {
    //apiurl:
    const apiUrl: string = "https://localhost:44395/login";
    return this.http.post<any>(apiUrl, login);
  }
  register(login: LoginModel) {
    //apiurl:
    const apiUrl: string = "https://localhost:44395/register";
    return this.http.post<any>(apiUrl, login);
  }

}
