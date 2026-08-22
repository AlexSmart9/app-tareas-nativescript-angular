import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
const routes: Routes = [
  // Define your routes here
  {path: '', component: ListTasksComponent},
  {path: 'details', component: TasksDetailsComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TasksRoutingModule {}  