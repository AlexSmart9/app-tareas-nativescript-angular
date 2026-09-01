import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './store/news.reducer';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule, 
    NativeScriptModule, 
    NativeScriptUISideDrawerModule,
    StoreModule.forRoot({ favorites: newsReducer })
  ],
  declarations: [AppComponent],
  providers: [
        provideHttpClient() // 2. Lo agregamos globalmente
    ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}


