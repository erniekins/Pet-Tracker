import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpService } from '../product/http.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
	products = [];
	product: Object;
  QuantityError: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	this.product = {};
    this.QuantityError = 0
    //this.quantity = {};
  	this._route.params.subscribe((prms: Params) => {
  		console.log(prms['id'], 'Got the id from the route')
  		this._httpService.getOneProduct(prms['id']).subscribe((data:any) => {
  			this.product = data['product']
  		})
  	})
  }

  deleteProduct(){
    console.log(this.product)
    this.quantity = this.product.qty
    console.log(this.quantity)
    if(this.quantity == 0){
    	this._httpService.deleteProduct(this.product).subscribe((data: Object) => {
    		console.log('Deleting task from the DB', this.product)
        this._router.navigate(['/products'])
    	})
    	// this._router.navigate(['/products'])
      }
    else if(this.quantity > 0){
      this.QuantityError ++;
      console.log(this.QuantityError)
    }
  }
}
