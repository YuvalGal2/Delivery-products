import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../shared/products.service';
import { Product } from './product/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productTypes = [];
  productsList:Product[]; 
  constructor(private productService:ProductsService) { }

  ngOnInit() {
   this.productService.getProducts().subscribe(((response:Product[]) => {
      this.productsList = response;
      console.log(this.productsList);
   }))

  
  }
  trackByProductId(index,product):number{
    return product.id;
  }
}
