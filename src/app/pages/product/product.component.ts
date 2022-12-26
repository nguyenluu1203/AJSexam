import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  id : number = 0;
  product: any= {
    "id": 1,
    "title": 'iphone 9',
    "price": 549,
    "thumbnail": Adapters.BASE_URL+'data/products/1/thumbnail.jpg',
  }

  constructor(private route: ActivatedRoute,private productSevice:ProductService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getProduct();
    })
  }

  ///call API: https://dummyjson.com/products/ + this.id
  getProduct(){
    //call api
    this.productSevice.getProductDetail(this.id)
    .subscribe(data =>{
      //set data to product
      this.product = data
    })
  }
}
