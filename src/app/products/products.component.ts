import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './../shared/products.service';
import { Product } from './product/product.model';
@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
	productsList: Product[] = [];
	private editedSubscription: Subscription;
	private productSubscription: Subscription;
	displayEditMode: boolean = false;

	constructor(private productService: ProductsService) { }
	
	ngOnInit() {
		this.editedSubscription = this.productService.editedProduct.subscribe((editingStatus): void => {
			this.displayEditMode = editingStatus.editMode;
		})

		this.productSubscription = this.productService.getProducts().subscribe(((response: Product[]): void => {
			this.productsList = response;
		}))

	}

	filterByDescription(keywords: string): void {
		if (keywords.length > 0) {
			this.productsList = this.productService.filterByDescription(keywords);
		}
		else {
			this.productsList = this.productService.getProductsList();
		}
	}

	handleDelete(id: number): void {
		this.productsList = this.productService.removeProductById(id);
	}

	handleEdit(product: Product): void {
		this.productsList = this.productService.updateProduct(product);
	}

	handleAddProduct(formData: any): void {
		this.productsList = this.productService.addNewProduct(formData);
	}

	ngOnDestroy(): void {
		this.productSubscription.unsubscribe();
		this.editedSubscription.unsubscribe();
	}
}
