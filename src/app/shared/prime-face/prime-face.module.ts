import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';

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
