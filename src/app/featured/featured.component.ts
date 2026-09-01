import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Store } from '@ngrx/store';
import { addFavorite } from '../store/news.actions';
import { NewsService } from '../domain/news.service';


@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  
  myFavorites: any[] = [];

  
  constructor(
    private newsService: NewsService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    // Init your component properties here.
    this.myFavorites = this.newsService.getFavorites();
  };

  onRead( news :any ) {
    this.store.dispatch(addFavorite({news: news}))
    console.log("Action dispatched to the redux store for:", news.title); 
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
