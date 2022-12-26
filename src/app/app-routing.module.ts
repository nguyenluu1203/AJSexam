import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlideBarComponent} from "./pages/slide-bar/slide-bar.component"; // CLI imports router

const routes: Routes = [
  {path: 'Send', component: SlideBarComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
