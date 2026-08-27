import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { MinLenDirective } from './minlen.validator'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'
import { NewsService } from '../domain/news.service'
import { ListItemsComponent } from './list-items/list-item.component'
import {ItemDetailsComponent} from './items-details/item-details.component'
import { SearchFormComponent } from './search-form.component'
import { EditItemComponent} from './list-items/edit-item.component'


@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, NativeScriptFormsModule],
  declarations: [
    SearchComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    SearchFormComponent,
    MinLenDirective,
    EditItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NewsService]
  
})
export class SearchModule {}
