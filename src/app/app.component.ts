import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent, ShoppingCartComponent],
  template: `
    <div class="outer-container">
      <h1 class="title">Simple Point Of Sales</h1>
      <div class="content-row">
        <div class="product-list-section">
          <h4>Product List</h4>
          <app-products></app-products>
        </div>
        <div class="shopping-cart-section">
          <h4>Shopping Cart</h4>
          <app-shopping-cart></app-shopping-cart>
        </div>
      </div>

      <!-- Student name at the bottom -->
      <div class="student-info">
        Student Name: Talal Al Zuhair, Student ID: 991658377
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
