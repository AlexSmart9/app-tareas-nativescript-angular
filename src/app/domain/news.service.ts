import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private API ='https://blast-jolliness-patchwork.ngrok-free.dev/api/news';

  constructor( private http: HttpClient ) {}

  getNews(category?: string) : Observable<any[]> {
    let apiUrl = this.API;

    if(category) {
      apiUrl+= `?category=${category}`
    }

    return this.http.get<any[]>(apiUrl);
  }
}