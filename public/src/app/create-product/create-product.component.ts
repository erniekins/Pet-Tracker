import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpService } from '../product/http.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
	newProduct: Object;
	validErrors: Object[];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  	this.resetNewProduct();
  	this.validErrors = [];
  }
  createProduct(){
    this.validErrors = [];
  	console.log(this.newProduct);
  	let observable = this._httpService.addProduct(this.newProduct);
  	observable.subscribe((data_created: any) =>{
  		this.resetNewProduct();
  		if(data_created.errors){
  			console.log('oops', data_created.errors)
  			for( let err in data_created.errors){
  				this.validErrors.push(data_created.errors[err].message);
  			}
  		}
  		else {
  			this._router.navigate(['products'])
  		}
  	})
  }

  resetNewProduct() {
  	this.newProduct = {
  		name: '',
  		qty: '',
  		price: ''
  	}
  }
}
