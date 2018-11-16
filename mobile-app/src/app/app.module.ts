import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileLibraryModule } from 'mobile-library'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MobileLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
