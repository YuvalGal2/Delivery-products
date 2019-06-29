import { Product } from './../products/product/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, endWith,catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly apiUrl: string = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
	constructor(private httpClient: HttpClient) { }
	private productsList: Product[] = [];

	editedObs = new BehaviorSubject({ id: 0, editMode: false });
	editedProduct = this.editedObs.asObservable();


	filterByDescription(keywords:string):Product[]{
		return this.productsList.filter((product:Product) => product.description.includes(keywords));
	}
	getProductsList(){
		return this.productsList;
	}
	updateProduct(product) {
		const productToUpdate:Product = this.productsList.find((singleProduct:Product) => singleProduct.id === product.id);
		this.productsList[this.productsList.indexOf(productToUpdate)] = product;
		return this.productsList;
	}
	getProductById(id: number) {
		return this.productsList.find((product: Product) => product.id === id);
	}

	editModeChanged(id: number, newEditMode: boolean) {
		this.editedObs.next({ id: id, editMode: newEditMode })
	}

	removeProductById(id: number) {
		// disable editing option for deleted product
		this.editedObs.subscribe((observer) => {
			if (observer.id === id) {
				this.editedObs.next({ id: 0, editMode: false });
			}
		})
		return this.productsList = this.productsList.filter((product: Product) => product.id !== id);
	}

	getProducts() {
		const obs = this.httpClient.get(this.apiUrl)
			.pipe(
				catchError((error) => {
					return []
				}),
				
				map((obs: Product[]) => {
				return obs.map(product => {
					const listItems = {};
					delete product.type;
					if (!product.creationDate) {
						let type = product.type;
						Object.entries(product).forEach((entrie) => { // key value pair
							if (typeof (entrie) === 'object') { // if the value of the key is an object or an array
								if (entrie[1].length > 0) { // if its contain length - meaning array
									entrie[1].forEach(array => {
										this.productsList.push(array);
									});
								}
								else {
									this.productsList.push(entrie[1]);
								}
							}
						})
					}
					else {
						this.productsList.push(product);
					}
					return listItems;
				})
			}), endWith(this.productsList))
		return obs;
	}
}
