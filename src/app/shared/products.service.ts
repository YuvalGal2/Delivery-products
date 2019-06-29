import { Product } from './../products/product/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, endWith } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly apiUrl: string = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
	constructor(private httpClient: HttpClient) { }
	private productsList: Product[] = [];














	getProducts() {
		const obs = this.httpClient.get(this.apiUrl)
			.pipe(map((obs: Product[]) => {
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


	softProductsByType(type: number) {

	}
}
