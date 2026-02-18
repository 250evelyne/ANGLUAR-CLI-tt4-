import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly API_URL = "https://squid-app-a6n9k.ondigitalocean.app/auth";
  
  constructor(private readonly http: HttpClient) { }
  
  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, userData);
  }
}
