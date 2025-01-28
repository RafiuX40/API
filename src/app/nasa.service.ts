import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'kTEOImfxwjdzyPrdJ5SJl0ELgGU5CZUA3ygg55eI';

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);

  }
}
