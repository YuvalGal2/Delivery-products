import { ProductsService } from './../../shared/products.service';
import { Product } from './../product/product.model';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	product: Product;
	@Output() editedProduct = new EventEmitter<Product>();
	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		this.productsService.editedProduct.subscribe((editingObserver) => {
			this.product = this.productsService.getProductById(editingObserver.id);
		})
	}
	onSave(formData) {
		//this.productsService.updateProduct(this.product);
		this.product.name = formData.name;
		this.product.description = formData.description;
		this.product.price = formData.price;
        this.editedProduct.emit(this.product);
	}
}
