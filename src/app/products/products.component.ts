import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../models/product';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <div class="container my-3">
      <h2>Products</h2>
      <div class="d-flex flex-wrap">
        <button
          *ngFor="let product of appService.productList"
          class="btn btn-primary m-1"
          (click)="addToCart(product)">
          {{ product.productName }} - {{ product.price }}
        </button>
      </div>
    </div>
  `,
  imports: [CommonModule]
})
export class ProductsComponent {
  constructor(public appService: AppService) {}

  addToCart(product: Product): void {
    this.appService.addProductToCart(product);
  }
}
