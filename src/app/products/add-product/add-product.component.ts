import { Product } from './../product/product.model';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
	@Output() addedProduct = new EventEmitter();
	constructor() { }
	displayDialog: boolean = false;
	ngOnInit() {
		
	}

	showDialog(): void {
		this.displayDialog = true;
	}
	addProduct(formData): void {
		this.addedProduct.emit(formData);
		this.displayDialog = false;
	}

}
