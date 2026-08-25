import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';


@Component ({
  selector: 'ns-item-details',
  templateUrl: './item-details.component.html',
})

export class ItemDetailsComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
  }
  
}