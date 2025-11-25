import { Injectable } from '@angular/core';
import { ProductModel } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  private _products: ProductModel[] = [];

  get products(): ProductModel[] {
    return this._products;
  }

  public addProduct(product: ProductModel) {
    this._products.push(product);
  }

  public removeProduct(productId: number) {
    const indexToDelete = this._products.findIndex((product) => product.id === productId);
    if (indexToDelete >= 0) {
      this._products.splice(indexToDelete, 1);
    }
  }
}
