import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpService } from '../product/http.service';
//import { ProductComponent } from '../product/product.component'

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
	editProduct: Object;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	this.editProduct = {name: '', qty: 0, price: 0}
  	this._route.params.subscribe((prms: Params) => {
  		this._httpService.getOneProduct(prms['id']).subscribe(data => {
  			this.editProduct = data['product'];
  		})
  	}) 
  }
  editOneProduct(){
  	console.log('Going to edit', this.editProduct);
  	this._httpService.updateProduct(this.editProduct)
  	.subscribe((data: Object) => {
  		this._httpService.getProducts().subscribe((update_data: Object) => {
  			//this._productComponent.products = update_data['data'];
  			this._router.navigate(['/products']);
  		})
  	})
  }

}
