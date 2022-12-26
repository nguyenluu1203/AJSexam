import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
 classname: string = "TM2210";
 numberofstudent: number = 2;
 textColour = "text=primary";
 categories: string[] = [
   'Fashion','Watch','Shoes','Jewelry'
 ];
 product: any = {
   name: 'Iphone 14 Pro Max',
   price: 29000000
 };
 products: any = [
   {
     id:1,
     name: 'Iphone 14 Pro Max',
     price: 30000000,
     qty: 10
   },
   {
     id:2,
     name:'Iphone 13 Pro Max',
     price: 25000000,
     qty: 0
   },
   {
     id:3,
     name: 'Iphone 12 Pro Max',
     price: 21000000,
     qty: 5,
   }
   ]



  addStudent(){
    this.numberofstudent++;
    this.textColour = 'text-primary';
  }
  removeStudent(){
    if (this.numberofstudent > 0)
    this.numberofstudent--;
    if (this.numberofstudent == 0)
      this.textColour = 'text-danger';

  }


}
