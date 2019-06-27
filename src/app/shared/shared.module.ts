import { PrimeFaceModule } from './prime-face/prime-face.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    PrimeFaceModule,
    CommonModule,
    HttpClientModule,
    
  ],
  exports: [
    HttpClientModule,
    PrimeFaceModule,
    
  ]
})
export class SharedModule { }
