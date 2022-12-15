import { I_Product } from './../core/interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  private API_BASE = environment.API_BASE;

  constructor(private http: HttpClient) { }

  getProductService(id: string): Observable<any> {
    return this.http.get(`${this.API_BASE}/products/${id}`);
  }

  getProductsServices(): Observable<any> {
    return this.http.get(`${this.API_BASE}/products`);
  }

  createProductService(body: I_Product): Observable<any> {
    return this.http.post(`${this.API_BASE}/products`, body);
  }

  updateProductService(id: string, body: I_Product): Observable<any> {
    return this.http.patch(`${this.API_BASE}/products/${id}`, body);
  }

  deleteProductService(id: string): Observable<any> {
    return this.http.delete(`${this.API_BASE}/products/${id}`);
  }
}
