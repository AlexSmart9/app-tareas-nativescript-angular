import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from '@nativescript/angular';
import {NewsService} from '../../domain/news.service';


@Component({
  selector: 'ns-list-item',
  templateUrl: './list-item.component.html',
})

export class ListItemsComponent implements OnInit {

  searchResults: string[] = [];

  constructor(
    private routerExtensions:RouterExtensions,
    public news : NewsService,
  ) 
    {}
    
  ngOnInit(): void {
    // Init your component properties here.
    this.news.add("News 1");
    this.news.add("News 2");
    this.news.add("News 3");

    this.searchResults= [...this.news.search()]
  }

  onTapItem(item: any): void {
    console.dir(item)
    this.routerExtensions.navigate(['search/details'])
  }

  executeSearch(text: string) {

    const originalResults = this.news.search();

    if(!text) {
      this.searchResults = [...originalResults]
      return;
    }

    this.searchResults= originalResults.filter((t: string) => t.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    )
  }

}