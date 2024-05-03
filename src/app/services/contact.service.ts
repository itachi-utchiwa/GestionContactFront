import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../classes/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Contact[]> {
    // return this.http.post(`${this.baseUrl}/contactIndex`,contact);
    return this.http.post<Contact[]>(`${this.baseUrl}/contactIndex`, {});  }
    
  public addContact(contact:Contact): Observable<any> {
      return this.http.post(`${this.baseUrl}/contactStore`,contact);
    }
  
    deleteContact(id: number): Observable<any> {
      const url = `${this.baseUrl}/contactDestroy/${id}`;
      return this.http.delete<any>(url);
    }
    
}
