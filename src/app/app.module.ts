import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideBarComponent } from './pages/slide-bar/slide-bar.component';
import {AppRoutingModule} from "./app-routing.module";
import { RightItemComponent } from './pages/slide-bar/right-item/right-item.component';
import { LeftItemComponent } from './pages/slide-bar/left-item/left-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideBarComponent,
    RightItemComponent,
    LeftItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
