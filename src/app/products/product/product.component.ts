import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from './product.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	private editMode: boolean = false;
	@Output() deleteItem = new EventEmitter<number>();
	@Output() editItem = new EventEmitter<Product>();

	constructor(private productService: ProductsService) { }

	ngOnInit() { }

	onDelete(): void {
		this.deleteItem.emit(this.product.id);
	}
	changeEditMode(): void {
		this.editMode = !this.editMode;
		this.productService.editModeChanged(this.product.id, this.editMode);
	}
}
