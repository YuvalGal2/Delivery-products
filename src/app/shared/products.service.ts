import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './../products/product/product.model';
import { map, endWith,catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly apiUrl: string = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
	constructor(private httpClient: HttpClient) { }
	private productsList: Product[] = [];

	editedObs = new BehaviorSubject({ id: 0, editMode: false });
	editedProduct = this.editedObs.asObservable();


	filterByDescription(keywords:string):Product[] {
		return this.productsList.filter((product:Product) => product.description.includes(keywords));
	}

	addNewProduct(formData:Product): Product[] {
		const maxId = Math.max(...this.getProductsList().map(product => product.id), 0);
		const timestamp = new Date().valueOf();
		formData.creationDate = timestamp;
		formData.id = maxId+1;
		this.productsList.push(formData);
		return this.getProductsList();
	}

	getProductsList(): Product[] {
		return this.productsList;
	}

	updateProduct(product): Product[] {
		const productToUpdate:Product = this.productsList.find((singleProduct:Product) => singleProduct.id === product.id);
		this.productsList[this.productsList.indexOf(productToUpdate)] = product;
		return this.getProductsList();
	}


	getProductById(id: number): Product {
		return this.productsList.find((product: Product) => product.id === id);
	}


	editModeChanged(id: number, newEditMode: boolean): void {
		this.editedObs.next({ id: id, editMode: newEditMode })
	}


	removeProductById(id: number): Product[] {
		// disable editing option for deleted product
		this.editedObs.subscribe((observer) => {
			if (observer.id === id) {
				this.editedObs.next({ id: 0, editMode: false });
			}
		})
		return this.productsList = this.productsList.filter((product: Product) => product.id !== id);
	}


	getProducts():Observable<any>{
		const requestObservable:Observable<any> = this.httpClient.get(this.apiUrl)
			.pipe(
				catchError((error:HttpErrorResponse) => {
					console.error(`Server returned error: ${error.status}!`);
					return []
				}),
		
				map((requestObservable: Product[]) => {
				return requestObservable.map(product => {
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
		return requestObservable;
	}
}
