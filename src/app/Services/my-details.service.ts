import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDetailsService {
  url = 'https://dummy.restapiexample.com/api/v1/employees';
  getData$ = this.http.get(this.url);
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
}
