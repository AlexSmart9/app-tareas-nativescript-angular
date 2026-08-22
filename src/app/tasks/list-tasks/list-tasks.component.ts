import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, isIOS } from '@nativescript/core';

@Component({
  selector: 'ns-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  platformMessage: string = 'Loading...'

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    if (isAndroid) {
      this.platformMessage = 'Running on Android';
    } else if (isIOS) {
      this.platformMessage = 'Running on iOS ';
    }
  }

  goToTaskDetails() {
    this.routerExtensions.navigate(['/tasks/details']);
  }
}