import { ProductsService } from './../../shared/products.service';
import { Product } from './../product/product.model';
import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	product: Product
	constructor(private ProductsService: ProductsService) { }

	ngOnInit() {
		this.ProductsService.editedProduct.subscribe((editingObserver) => {
			this.product = this.ProductsService.getProductById(editingObserver.id);
		})

	}

}
