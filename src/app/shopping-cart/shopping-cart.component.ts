import { Component } from '@angular/core';
import { AppService } from '../app.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  template: `
    <div class="container my-3" >
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of appService.shoppingCart">
            <td>{{ product.productName }}</td>
            <td>\${{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>\${{ (product.price * product.quantity) | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Subtotal: \${{ appService.calculateSubtotal() | number:'1.2-2' }}</p>
        <p>Tax (13%): \${{ appService.calculateTax() | number:'1.2-2' }}</p>
        <p>Total: \${{ appService.calculateTotal() | number:'1.2-2' }}</p>
      </div>
    </div>
  `,
  imports: [CommonModule],
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  constructor(public appService: AppService) {}
}
