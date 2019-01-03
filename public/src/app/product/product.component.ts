import { Component, OnInit } from '@angular/core';

import { HttpService } from '../product/http.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	products =[];
	product: Object;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.getProductsFromService();
  }
  getProductsFromService() {
  	let observable = this._httpService.getProducts();
  	observable.subscribe(data => {
  		console.log('Getting all the products', data);
  		this.products = data['products'];
  	})
  }
}
