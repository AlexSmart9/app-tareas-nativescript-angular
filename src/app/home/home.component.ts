import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  favorites$: Observable<any[]>;

  constructor( private store: Store<{ favorites: any[] }>) {
    // Use the component constructor to inject providers.

    this.favorites$ = this.store.select('favorites');
    
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
