import { Product } from './../products/product/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
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
										console.log(this.productsList);
									});
								}
								else {
									console.log(this.productsList);
									this.productsList.push(entrie[1]);
								}
							}
						})
					}
					else {
						console.log(this.productsList);
						this.productsList.push(product);
					}
					console.log(this.productsList);
					return listItems;
				})
			}))
		return obs;
	}


	softProductsByType(type: number) {

	}
}
