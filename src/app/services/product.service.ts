import {Injectable} from "@angular/core";
import {Adapters} from "../enums/adapters";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export  class  ProductService{
  constructor(private http: HttpClient) {
  }

  getProducts(limit: number){
    const url = Adapters.BASE_URL+'products?limit'+limit;
    return this.http.get<any>(url);
  }

  getProductDetail(id: number){
    const  url = Adapters.BASE_URL+ 'products/'+id;
    return this.http.get<any>(url);

  }

  getListCategory(){
    const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(url);
  }
  getCategoryDetail(name: string) {
    const url = Adapters.BASE_URL + 'products/categories' + name;
    return this.http.get<any>(url);
  }
  getSearch(name: string){
    const url = Adapters.BASE_URL+ 'products/search?q='+name;
    return this.http.get<any>(url);
  }

}
