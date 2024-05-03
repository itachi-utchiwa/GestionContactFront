import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrl = 'http://localhost:8000/api';


  constructor(private http: HttpClient) { }
  
  public inscription(user:User): Observable<any> {
    return this.http.post(`${this.baseUrl}/store`,user);
  }
}
