import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProducto[] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProducto[]) => {
      // Utilizar https://quicktype.io/ para no utilizar any
      console.log(data);
      this.productList = data;
    });
  }

  navegate(id: number) {
    this._router.navigate(['/product', id]);
  }

}
