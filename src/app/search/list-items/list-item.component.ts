import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from '@nativescript/angular';
import {NewsService} from '../../domain/news.service';


@Component({
  selector: 'ns-list-item',
  templateUrl: './list-item.component.html',
})

export class ListItemsComponent implements OnInit {

  searchResults: any[] = [];
  originalNews: any[] = [];

  constructor(
    private routerExtensions:RouterExtensions,
    public newsService : NewsService,
  )  {}
    
  ngOnInit(): void {
    // Init your component properties here.
    this.newsService.getNews('tecnologia').subscribe({
      next: (data : any) => {
        this.searchResults = data;
        this.originalNews = data;
        console.log('Data suchesfully loaded from Express!')
      },
      error: (err : any) => {
  
        console.log('Api Error', err)
  
      }
    });
  };

  onTapItem(item: any): void {
  
    console.dir(item)
    this.routerExtensions.navigate(['search/details'])
  
  };

  executeSearch(text: string) {
    if(!text) {
  
      this.searchResults = [...this.originalNews];
      return;
  
    };

    
    this.searchResults = this.originalNews.filter((item: any) => 
  
      item.title.toLowerCase().includes(text.toLowerCase())
    
  );
  };

  onMarkFavorite(item: any) {
    this.newsService.saveFavorite(item);
    console.log("¡New marked as favorite!", item.title, "!");
  }

};