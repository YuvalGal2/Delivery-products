import { element } from 'protractor';
import { Product } from './../products/product/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl:string = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
  constructor(private httpClient: HttpClient) { }
  private productTypes = [];
  private productsList = [
    { "creationDate":1530110788904,
      "deliveryComp":"dhl",
      "description":"officia delectus consequatur vero aut veniam explicabo molestias",
      "id":7,
      "name":"product 7",
      "price":14,
      "thumbnailUrl":"http://placehold.it/150/b0f7cc",
      "type":3,
      "url":"http://placehold.it/600/b0f7cc"
    },
    { "creationDate":15301107866904,
      "deliveryComp":"dhl",
      "description":"officia delectus consequatur vero aut veniam explicabo molestias",
      "id":8,
      "name":"product 8",
      "price":20,
      "thumbnailUrl":"http://placehold.it/150/b0f7cc",
      "type":3,
      "url":"http://placehold.it/600/b0f7cc"
  },
  ];

  getProducts() {
  
    return of(this.productsList);
    // return this.httpClient.get<Product[]>(this.apiUrl)
    //  .pipe(map( responseObs => responseObs.map((product:Product) => {
       
    //   if(product.name){
    //     this.productsList.push(product);
    //   }
    //   else{
    //     const ObjKeys = Object.keys(product);
    //   //  console.log(ObjKeys);
    //     ObjKeys.forEach((key,index) => {
    //       if(key !== "type"){
    //         let elements = product[key];
    //         console.log(this.productsList);
    //         this.productsList.concat(this.productsList,elements);
    //       }
    //     })
      
    //   }
      
    //   return product;
    // })));
    // need to soft the respsonse, take all products data outside of the category object

    /// the api returns the
    // .pipe(map( responseObs => responseObs.map((product:Product) => {
    //   return product;
    // })));
  }
  softProductsByType(type:number){
  
  }
}
