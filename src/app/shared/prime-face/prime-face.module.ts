import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    ListboxModule
  ]

})
export class PrimeFaceModule { }
