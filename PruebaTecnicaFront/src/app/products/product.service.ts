import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { constants } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(limit = 10, offset = 0) {
    return this.http.get(`${constants.urlBase}/products?limit=${limit}&offset=${offset}`);
  }

  create(product: { name: string; description: string; price: number }) {
    return this.http.post(`${constants.urlBase}/products`, product);
  }

  delete(id: number) {
    return this.http.delete(`${constants.urlBase}/products/${id}`);
  }
  
}
