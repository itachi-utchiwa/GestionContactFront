import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connexion } from '../classes/connexion';


@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }


  public login(connexion:Connexion): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`,connexion);
  }
}
