import { Component } from '@angular/core';
import { ProductModel } from '../../product.model';
import { Products } from '../../product';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  get products() {
    return this._service.products;
  }

  constructor(private _service: ProductCartService) {}

  get totalAmount(): number {
    let total = 0;
    this.products.forEach((product) => (total += product.price));
    return total;
  }

  removeProduct(productId: number) {
    this._service.removeProduct(productId);
  }
}
