import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent} from "./pages/home/home.component";
import { ProductComponent} from "./pages/product/product.component";
import { CategoryComponent} from "./pages/category/category.component";
import {Router, RouterModule, Routes} from "@angular/router";

import * as path from "path";
import {HttpClientModule} from "@angular/common/http";
import { ListcategoryComponent } from './pages/listcategory/listcategory.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";


//1. khai bao danh sach cac routing
const appRoutes: Routes = [
{ path: '', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'listcategory', component:ListcategoryComponent},
  {path: 'search', component:SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProductComponent,CategoryComponent, ListcategoryComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
