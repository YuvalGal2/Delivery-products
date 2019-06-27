import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from './../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
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
