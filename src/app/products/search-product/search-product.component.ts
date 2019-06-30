import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search-product',
	templateUrl: './search-product.component.html',
	styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
	@Output() searchItem = new EventEmitter<string>();
	constructor() { }

	ngOnInit() {
	}

	onfilterByDescription(keywords: string): void {
		this.searchItem.emit(keywords);
	}

}
