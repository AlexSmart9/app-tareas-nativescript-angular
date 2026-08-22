import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from '@nativescript/angular';

import {TasksRoutingModule} from './tasks-routing.module';
import {ListTasksComponent} from './list-tasks/list-tasks.component';
import {TasksDetailsComponent} from './tasks-details/tasks-details.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    TasksRoutingModule
  ],
  declarations: [
    ListTasksComponent,
    TasksDetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class TasksModule {}