import {Injectable} from '@angular/core';

@Injectable()
export class NewsService {
  private news: any[] = [ ];  

  add(s: string) {
    this.news.push(s);
  };

  search() {
    return this.news;
  }
}