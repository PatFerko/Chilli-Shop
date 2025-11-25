import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../product.model';
import { Products } from '../../product';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  products: ProductModel[] = Products;
  product: ProductModel | undefined;
  productId: number | undefined;

  constructor(private route: ActivatedRoute, private _service: ProductCartService) {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.product = Products.find((p) => p.id === this.productId);
  }

  addToCart(product?: ProductModel) {
    if (product !== undefined) {
      this._service.addProduct(product);
    }
  }
}
