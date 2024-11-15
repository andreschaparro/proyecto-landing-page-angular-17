import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inyección en formato angular 17
  private _http = inject(HttpClient);

  private urlBase: string = 'https://fakestoreapi.com/products';

  getAllProducts(): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(this.urlBase);
  }

  getProduct(id: number): Observable<IProducto> {
    return this._http.get<IProducto>(`${this.urlBase}/${id}`);
  }
}
