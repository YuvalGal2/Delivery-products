import { PrimeFaceModule } from './prime-face/prime-face.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    PrimeFaceModule,
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports: [
    HttpClientModule,
    PrimeFaceModule,
    FormsModule
    
  ]
})
export class SharedModule { }
