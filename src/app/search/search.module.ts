import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'
import { NewsService } from '../domain/news.service'
import { ListItemsComponent } from './list-items/list-item.component'
import {ItemDetailsComponent} from './items-details/item-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule],
  declarations: [
    SearchComponent,
    ListItemsComponent,
    ItemDetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NewsService]
  
})
export class SearchModule {}
