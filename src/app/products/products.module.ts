import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from './../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
