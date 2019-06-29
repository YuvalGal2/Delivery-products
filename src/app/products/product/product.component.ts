import { Product } from './product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()  product: Product;
  editMode: boolean = false;
  @Output() deleteItem = new EventEmitter<number>();
  @Output() editItem = new EventEmitter<Product>();
  constructor(private productService: ProductsService) { }

  ngOnInit() { }
  onDelete() {
   this.deleteItem.emit(this.product.id);
  }
  changeEditMode() {
    this.editMode = !this.editMode;
    this.productService.editModeChanged(this.product.id, this.editMode);
  }
}
