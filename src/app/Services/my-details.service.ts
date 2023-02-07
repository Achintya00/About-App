import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDetailsService {
  url = 'https://jsonplaceholder.typicode.com/users';
  getData$ = this.http.get(this.url);
  constructor(private http: HttpClient) {}
}
