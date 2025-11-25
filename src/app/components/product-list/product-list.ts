import { Component } from '@angular/core';
import { ProductModel } from '../../product.model';
import { Products } from '../../product';
import { RouterLink } from '@angular/router';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class AppProductList {
  products: ProductModel[] = Products;

  constructor(private _service: ProductCartService) {}

  addToCart(product: ProductModel) {
    let productToUpdate = this.products.find((i) => i.id === product.id);
    if (productToUpdate) {
      productToUpdate.itemsInInventory = productToUpdate.itemsInInventory - 1;
    }

    this._service.addProduct(product);
  }
}
