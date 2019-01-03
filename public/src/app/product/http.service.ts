import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
  	return this._http.get('/api/products');
  }

  addProduct(product) {
  	return this._http.post('/api/products', product)
  }

  getOneProduct(id) {
  	return this._http.get(`/api/products/${id}`)
  }

  deleteProduct(product) {
  	return this._http.delete(`/api/products/${product._id}`, product)
  }

  updateProduct(product) {
    return this._http.put(`/api/products/${product._id}`, product)
  }
}
