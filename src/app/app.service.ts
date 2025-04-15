import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public productList: Product[] = [
    new Product(1, 'iPhone 16 Pro', 1499.0),
    new Product(2, 'iPhone 16 Pro Max', 1749.0),
    new Product(3, 'iPhone 16', 1129.0),
    new Product(4, 'iPhone 16 Plus', 1279.0)
  ];

  public shoppingCart: Product[] = [];

  // This adds a product to the shopping cart
  addProductToCart(product: Product): void {
    const existingProduct = this.shoppingCart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      // Use a shallow copy to avoid accidental linkage.
      this.shoppingCart.push({ ...product });
    }
  }

  // This does the calculations for the shopping cart
  calculateSubtotal(): number {
    return this.shoppingCart.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  calculateTax(): number {
    return this.calculateSubtotal() * 0.13;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.calculateTax();
  }
}
