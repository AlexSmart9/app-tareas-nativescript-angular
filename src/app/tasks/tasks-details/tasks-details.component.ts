import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from '@nativescript/angular'; 

@Component({
  selector: 'ns-tasks-details',
  templateUrl: './tasks-details.component.html',
})

export class TasksDetailsComponent implements OnInit {
  constructor( private routerExtensions: RouterExtensions) {} 

  ngOnInit(): void{}
}