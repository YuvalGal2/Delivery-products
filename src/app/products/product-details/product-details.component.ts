import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ProductsService } from './../../shared/products.service';
import { Product } from './../product/product.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
	private product: Product;
	@Output() editedProduct = new EventEmitter<Product>();
	private editedSubscription: Subscription
	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		this.editedSubscription = this.productsService.editedProduct.subscribe((editingObserver) => {
			this.product = this.productsService.getProductById(editingObserver.id);
		})
	}
	onSave(formData): void {
		this.product.name = formData.name;
		this.product.description = formData.description;
		this.product.price = formData.price;
		this.editedProduct.emit(this.product);
	}

	ngOnDestroy(): void {
		this.editedSubscription.unsubscribe();
	}
}
