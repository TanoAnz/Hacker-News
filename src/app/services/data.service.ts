import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getDati(): Observable<any>{
    return this.http.get("https://hacker-news.firebaseio.com/v0/newstories.json");
  }
  getNews(id: number): Observable<any>{
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
  }
}
