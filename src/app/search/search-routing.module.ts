import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { SearchComponent } from './search.component'
import { ItemDetailsComponent } from './items-details/item-details.component'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'details', component: ItemDetailsComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
