import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideBarComponent } from './pages/slide-bar/slide-bar.component';
import {AppRoutingModule} from "./app-routing.module";
/*
import { RightItemComponent } from './pages/slide-bar/right-item/right-item.component';
*/
import {LeftSelectComponent} from "./pages/slide-bar/left/left-select";


@NgModule({
  declarations: [
    AppComponent,
    SlideBarComponent,
    /*RightItemComponent,*/
    LeftSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
