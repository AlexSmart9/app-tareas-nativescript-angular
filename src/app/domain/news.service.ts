import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private API = AppConfig.ngrokUrl;

  private favoritesList: any[] =[];


  constructor( private http: HttpClient ) {}

  getNews(category?: string) : Observable<any[]> {
    let apiUrl = this.API;

    if(category) {
      apiUrl+= `?category=${category}`
    }

    return this.http.get<any[]>(apiUrl);
  };

  saveFavorite( news: any ) {
    const exist = this.favoritesList.find( n => n.title === news.title );

    if (!exist) {
      this.favoritesList.push(news);
    }
  };

  getFavorites () {
    return this.favoritesList;
  };

}