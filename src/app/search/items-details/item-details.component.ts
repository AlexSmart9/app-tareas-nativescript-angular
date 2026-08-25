import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';


@Component ({
  selector: 'ns-item-details',
  templateUrl: './item-details.component.html',
})

export class ItemDetailsComponent implements OnInit {

  comments: any[] = [
    {user: 'guest_1', text: "This is a comment", date: new Date()},
    {user: 'guest_2', text: "This is another comment", date: new Date()},
  ]

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
  }

  //  Function Pull to Refresh

  onPull( e: any ) {
    const pullRefresh = e.object;

    setTimeout(() => {
      this.comments.push({
        user: 'guest_' + Math.floor(Math.random() * 100),
        text: "This is a new comment added by pull to refresh",
        date: new Date()
      });

      pullRefresh.refreshing = false;
    })
  }
  
}