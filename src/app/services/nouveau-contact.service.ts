import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../classes/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NouveauContactService {

  private baseUrl = 'http://localhost:8000/api';

constructor(private http: HttpClient) { }

public contactStore(contact:Contact): Observable<any> {
  return this.http.post(`${this.baseUrl}/contactStore`,contact);
}
public updateStore(contact:Contact, id: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/contactUpdate/${id}`,contact);
}

}
